import { useState } from "react";
import ChatList from "../components/ChatList";
import ChatContainer from "../components/ChatContainer";
import ChatInfo from "../components/ChatInfo";
import NoChatSelected from "../components/NoChatSelected";
import { users } from "../data";

const Home = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [chatList, setChatList] = useState(users)

    const [selectedChat, setSelectedChat] = useState(users[1]);
    const [showChatInfo, setShowChatInfo] = useState(false);

    return (
        <div className='w-full h-screen flex items-center justify-center bg-black/60'>

            <div className={`w-[80%] h-[90%] overflow-visible bg-black/10 backdrop-blur-2xl rounded-2xl border-2 border-gray-300/30 text-white grid  
                ${selectedChat && showChatInfo ? 'grid-cols-[1fr_1.5fr_1fr]' : 'grid-cols-[1fr_1.5fr]'} gap-4`}>

                <ChatList chatList={chatList} selectedChat={selectedChat} setSelectedChat={setSelectedChat} />

                {selectedChat ?
                    <ChatContainer selectedChat={selectedChat}
                        showChatInfo={showChatInfo} setShowChatInfo={setShowChatInfo} /> :
                    <NoChatSelected />}

                {selectedChat && showChatInfo && <ChatInfo />}
            </div>
        </div>
    )
}

export default Home

