import { useState } from "react";
import ChatList from "../components/ChatList";
import ChatContainer from "../components/ChatContainer";
import ChatInfo from "../components/ChatInfo";

const Home = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [showChat, setShowChat] = useState(false);

    return (
        <div className='w-full h-screen flex items-center justify-center bg-black/60'>

            <div className={`w-[80%] h-[90%] overflow-visible bg-black/10 backdrop-blur-2xl rounded-2xl border-2 border-gray-300/30 text-white p-6 grid 
                ${showChat ? 'grid-cols-[1fr_1.5fr_1fr]' : 'grid-cols-[1fr_1.5fr]'} gap-4`}>
                <ChatList />
                <ChatContainer />
                {showChat && <ChatInfo />}
            </div>
        </div>
    )
}

export default Home

