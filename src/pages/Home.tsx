import { useEffect, useState } from "react";
import ChatList from "../components/ChatList";
import ChatContainer from "../components/ChatContainer";
import ChatInfo from "../components/ChatInfo";
import NoChatSelected from "../components/NoChatSelected";
import { type MessageType, type UserType } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser } from "../redux/userSlice";
import { addMessageToCurrentChat, getSelectedChat, increaseUnseenCount, setChatList, setLoading, setMessages, setUserUnseenToZero } from "../redux/chatSlice";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../axiosInstance";
import { toast } from "react-toastify";
import { socket } from "../utils/socket";
import useSocketSetup from "../hooks/useSocketSetup";
// import { Socket } from "socket.io-client";
// import socket from "../socket";

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const loggedInUser = useSelector(getLoggedInUser) as UserType | null
    const selectedChat = useSelector(getSelectedChat) as UserType | null

    const [showChatInfo, setShowChatInfo] = useState(false);

    // This effect is used to set the messages for the selected chat
    useEffect(() => {
        const getMessages = async () => {
            if (selectedChat && loggedInUser) {
                dispatch(setLoading(true));

                try {
                    const res = await axiosInstance.get(`/message/${selectedChat._id}`);
                    if (res.data.success) {
                        dispatch(setMessages(res.data.messages));
                        dispatch(setUserUnseenToZero(selectedChat._id));
                    }
                } catch (error) {
                    console.error(error);
                    toast.error("Failed to fetch messages. Please try again later.");
                    dispatch(setLoading(false));
                }
            }
        }

        getMessages()
    }, [selectedChat])


    useEffect(() => {
        if (!loggedInUser?.bio) {
            navigate('/update-profile')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        const fetchChatList = async () => {
            if (loggedInUser) {
                try {
                    const res = await axiosInstance.get('/user/get-users')
                    console.log(res.data.users);

                    if (res.data.success) {
                        const chatList = res.data.users
                        dispatch(setChatList(chatList));
                    }
                } catch (error) {
                    console.error(error);
                }
            }
        }
        fetchChatList()
    }, [])

    useSocketSetup();

    // useEffect(() => {
    //     if (loggedInUser?._id) {
    //         socket.emit("setup", loggedInUser?._id)
    //     }

    //     socket.on("connect", () => {
    //         console.log("✅ Connected to socket server:", socket.id);
    //     });

    //     socket.on("disconnect", () => {
    //         console.log("❌ Disconnected from socket server");
    //     });

    //     return () => {
    //         socket.off("connect");
    //         socket.off("disconnect");
    //     };
    // }, [])


    // useEffect(() => {
    //     const handleNewMessage = (message: MessageType) => {
    //         if (message.senderId === selectedChat?._id) {
    //             dispatch(addMessageToCurrentChat(message))
    //         } else {
    //             dispatch(increaseUnseenCount(message.senderId))
    //         }
    //     }

    //     socket.on("newMessage", handleNewMessage)

    //     return () => {
    //         socket.off("newMessage", handleNewMessage);
    //     };

    // }, [selectedChat?._id])

    return (
        <div className='w-full h-screen flex items-center justify-center bg-black/60'>

            <div className={`w-[90%] h-[95%] md:w-[80%] md:h-[90%] overflow-visible bg-black/10 backdrop-blur-2xl rounded-2xl border-2 border-gray-300/30 text-white grid  
                ${selectedChat && showChatInfo ? 'grid-cols-1 md:grid-cols-[1fr_1.5fr] lg:grid-cols-[1fr_1.5fr_1fr]' : 'grid-cols-1 md:grid-cols-[1fr_1.5fr]'} `}>

                {/* left sidebar */}
                <ChatList selectedChat={selectedChat ? true : false} />

                {/* middle portion  */}

                {selectedChat ?
                    <ChatContainer showChatInfo={showChatInfo} setShowChatInfo={setShowChatInfo} /> :
                    <NoChatSelected />
                }


                {/* right sidebar */}
                {selectedChat && showChatInfo && <ChatInfo selectedChat={selectedChat} setShowChatInfo={setShowChatInfo} />}
            </div>
        </div>
    )
}

export default Home

