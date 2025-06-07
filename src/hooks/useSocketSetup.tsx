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
        if (!user._id) return

        socket.connect()
        socket.emit("setup", user._id)

        socket.on("onlineUsers", userIds => {
            dispatch(setOnlineUsers(userIds))
        })

        socket.on("userOnline", (id) => {
            dispatch(addOnlineUser(id));
        });

        socket.on("userOffline", (id) => {
            dispatch(removeOnlineUser(id));
        });

        socket.on("newMessage", (message) => {
            if (message.senderId === selectedChat?._id) {
                dispatch(addMessageToCurrentChat(message));
            } else {
                dispatch(increaseUnseenCount(message.senderId));
            }

        })

        return () => {
            socket.off("connect");
            socket.off("disconnect");
            socket.off("onlineUsers");
            socket.off("userOnline");
            socket.off("userOffline");
            socket.off("newMessage");
        };

    }, [user?._id, selectedChat?._id]);
}

export default useSocketSetup