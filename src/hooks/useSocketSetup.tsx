import { useDispatch, useSelector } from "react-redux"
import { getLoggedInUser } from "../redux/userSlice"
import { addMessageToCurrentChat, getSelectedChat, increaseUnseenCount } from "../redux/chatSlice"
import { useEffect } from "react"
import type { UserType } from "../data"
import { socket } from "../socket"
import { addOnlineUser, removeOnlineUser, setOnlineUsers } from "../redux/userStatusSlice"

const useSocketSetup = () => {
    const user = useSelector(getLoggedInUser) as UserType
    const selectedChat = useSelector(getSelectedChat)
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
        const handleOnlineUsers = (userIds) => {
            dispatch(setOnlineUsers(userIds));
        };

        const handleUserOnline = (id) => {
            dispatch(addOnlineUser(id));
        };

        const handleUserOffline = (id) => {
            dispatch(removeOnlineUser(id));
        };

        const handleNewMessage = (message) => {
            if (message.senderId === selectedChat?._id) {
                dispatch(addMessageToCurrentChat(message));
            } else {
                dispatch(increaseUnseenCount(message.senderId));
            }
        };

        socket.on("onlineUsers", handleOnlineUsers);
        socket.on("userOnline", handleUserOnline);
        socket.on("userOffline", handleUserOffline);
        socket.on("newMessage", handleNewMessage);

        return () => {
            socket.off("onlineUsers", handleOnlineUsers);
            socket.off("userOnline", handleUserOnline);
            socket.off("userOffline", handleUserOffline);
            socket.off("newMessage", handleNewMessage);
        };
    }, [selectedChat?._id]);
}

export default useSocketSetup