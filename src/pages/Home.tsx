import { useEffect, useState } from "react";
import ChatList from "../components/ChatList";
import ChatContainer from "../components/ChatContainer";
import ChatInfo from "../components/ChatInfo";
import NoChatSelected from "../components/NoChatSelected";
import { messages, users, type UserType } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { getLoggedInUser } from "../redux/userSlice";
import { getSelectedChat, setChatList, setMessages } from "../redux/chatSlice";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loggedInUser = useSelector(getLoggedInUser) as UserType | null
    const selectedChat = useSelector(getSelectedChat) as UserType | null

    const [showChatInfo, setShowChatInfo] = useState(false);

    // This effect is used to set the messages for the selected chat
    useEffect(() => {
        const msg = selectedChat && messages.filter(msg =>
            msg.senderId === loggedInUser?.id && msg.receiverId === selectedChat?.id ||
            msg.senderId === selectedChat?.id && msg.receiverId === loggedInUser?.id)
        if (msg) {
            dispatch(setMessages(msg))
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedChat])

    // This effect is used to set the chat list when the logged in user changes
    useEffect(() => {
        if (loggedInUser) {
            dispatch(setChatList(users.filter(user => user.id !== loggedInUser?.id)))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedInUser])

    useEffect(() => {
        if (!loggedInUser?.bio || !loggedInUser?.picture) {
            navigate('/update-profile')
        }
    }, [])

    return (
        <div className='w-full h-screen flex items-center justify-center bg-black/60'>

            <div className={`w-[80%] h-[90%] overflow-visible bg-black/10 backdrop-blur-2xl rounded-2xl border-2 border-gray-300/30 text-white grid  
                ${selectedChat && showChatInfo ? 'grid-cols-[1fr_1.5fr_1fr]' : 'grid-cols-[1fr_1.5fr]'} gap-4`}>

                {/* left sidebar */}
                <ChatList />

                {/* middle portion  */}
                {selectedChat ?
                    <ChatContainer showChatInfo={showChatInfo} setShowChatInfo={setShowChatInfo} /> :
                    <NoChatSelected />
                }

                {/* right sidebar */}
                {selectedChat && showChatInfo && <ChatInfo selectedChat={selectedChat} />}
            </div>
        </div>
    )
}

export default Home

