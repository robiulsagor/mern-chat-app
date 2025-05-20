import { useEffect, useState } from "react";
import ChatList from "../components/ChatList";
import ChatContainer from "../components/ChatContainer";
import ChatInfo from "../components/ChatInfo";
import NoChatSelected from "../components/NoChatSelected";
import { messages, users } from "../data";

const Home = () => {

    const loginUser = users[0]
    const [chatList, setChatList] = useState(users.filter(user => user.id !== 1000))

    const [selectedChat, setSelectedChat] = useState(false);
    const [showChatInfo, setShowChatInfo] = useState(false);
    const [messageList, setMessageList] = useState()

    useEffect(() => {
        const msg = selectedChat && messages.filter(msg =>
            msg.senderId === loginUser.id && msg.receiverId === selectedChat.id ||
            msg.senderId === selectedChat.id && msg.receiverId === loginUser.id)

        console.log(msg);

        setMessageList(msg)

    }, [selectedChat])

    return (
        <div className='w-full h-screen flex items-center justify-center bg-black/60'>

            <div className={`w-[80%] h-[90%] overflow-visible bg-black/10 backdrop-blur-2xl rounded-2xl border-2 border-gray-300/30 text-white grid  
                ${selectedChat && showChatInfo ? 'grid-cols-[1fr_1.5fr_1fr]' : 'grid-cols-[1fr_1.5fr]'} gap-4`}>

                <ChatList chatList={chatList} selectedChat={selectedChat} setSelectedChat={setSelectedChat} />

                {selectedChat ?
                    <ChatContainer selectedChat={selectedChat}
                        showChatInfo={showChatInfo} setShowChatInfo={setShowChatInfo}
                        messageList={messageList} loginUser={loginUser} /> :
                    <NoChatSelected />
                }

                {selectedChat && showChatInfo && <ChatInfo selectedChat={selectedChat} />}
            </div>
        </div>
    )
}

export default Home

