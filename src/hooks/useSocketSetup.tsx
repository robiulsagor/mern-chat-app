import { useDispatch, useSelector } from "react-redux"
import { getLoggedInUser } from "../redux/userSlice"
import { addMessageToCurrentChat, addUserToChatList, getSelectedChat, increaseUnseenCount } from "../redux/chatSlice"
import { useEffect } from "react"
import type { MessageType, UserType } from "../data"
import { socket } from "../socket"
import { addOnlineUser, removeOnlineUser, setOnlineUsers } from "../redux/userStatusSlice"

const useSocketSetup = () => {
    const user = useSelector(getLoggedInUser) as UserType
    const selectedChat = useSelector(getSelectedChat) as UserType | null
    const dispatch = useDispatch();

    useEffect(() => {
        if (!socket.connected) {
            socket.connect();
        }

        socket.on("connect", () => {
            // Emit setup *after* confirmed connection
            if (user?._id) {
                socket.emit("setup", user._id);
            }
        });

        return () => {
            socket.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (!user?._id) return;

        if (socket.connected) {
            socket.emit("setup", user._id);
        } else {
            // In case socket not yet connected
            socket.once("connect", () => {
                socket.emit("setup", user._id);
            });
        }
    }, [user?._id]);

    useEffect(() => {
        const handleOnlineUsers = (userIds: string[]) => {
            dispatch(setOnlineUsers(userIds));
        };

        const handleUserOnline = (id: string) => {
            dispatch(addOnlineUser(id));
        };

        const handleUserOffline = (id: string) => {
            dispatch(removeOnlineUser(id));
        };

        const handleNewMessage = (message: MessageType) => {
            if (message.senderId === selectedChat?._id) {
                dispatch(addMessageToCurrentChat(message));
            } else {
                dispatch(increaseUnseenCount(message.senderId));
            }
        };

        const handleAddNewUser = (newUser: UserType) => {
            console.log("New user online: ", newUser);
            dispatch(addUserToChatList(newUser));
        }

        socket.on("onlineUsers", handleOnlineUsers);
        socket.on("userOnline", handleUserOnline);
        socket.on("userOffline", handleUserOffline);
        socket.on("newMessage", handleNewMessage);
        socket.on("newUser", handleAddNewUser)

        return () => {
            socket.off("onlineUsers", handleOnlineUsers);
            socket.off("userOnline", handleUserOnline);
            socket.off("userOffline", handleUserOffline);
            socket.off("newMessage", handleNewMessage);
            socket.off("newUser", handleAddNewUser)
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedChat?._id]);
}

export default useSocketSetup