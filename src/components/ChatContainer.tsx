import { BiInfoCircle, BiSend } from "react-icons/bi";
import { CgAttachment } from "react-icons/cg";

const ChatContainer = ({ selectedChat, showChatInfo, setShowChatInfo }) => {
    console.log("selectedChat", selectedChat);

    return (
        <div className="relative flex flex-col justify-between  max-h-full overflow-hidden">
            {/* header part */}
            <div className="flex items-center justify-between py-3 px-3 border-b border-slate-600">
                <div className="flex items-center gap-3">
                    <img src={selectedChat.picture} className="block w-13 h-13 rounded-full" />
                    <div>
                        <h2 className="text-2xl font-semibold">{selectedChat.name} </h2>
                        <div className="flex items-center gap-2">
                            <span className="block w-3 h-3  bg-green-700 rounded-full"></span>
                            <span className="text-sm text-slate-400">Online</span>
                        </div>
                    </div>
                </div>

                <span className="cursor-pointer hover:bg-slate-600/20 active:bg-slate-600/20 p-2 rounded-full transition"
                    onClick={() => setShowChatInfo(prev => !prev)}>
                    <BiInfoCircle size={22} />
                </span>
            </div>
            {/* header part ends */}

            {/* messages */}
            <div className="overflow-y-scroll flex-1 py-2 flex flex-col-reverse gap-4">

                {/* msg */}
                <div className="flex gap-4 items-end max-w-1/2">
                    <img src={selectedChat.picture} className="w-10 h-10 rounded-full mb-5" alt="" />
                    <div>
                        <p className="bg-cyan-700/50 p-3 rounded-2xl">
                            and God will make you successful.
                        </p>
                        <span className="text-gray-700 text-sm"> Yesterday </span>
                    </div>
                </div>

                {/* msg */}
                <div className="flex gap-4 items-end max-w-1/2">
                    <img src={selectedChat.picture} className="w-10 h-10 rounded-full mb-5" alt="" />
                    <div>
                        <p className="bg-cyan-700/50 p-3 rounded-2xl">
                            Maybe you should try some more
                        </p>
                        <span className="text-gray-700 text-sm"> Yesterday </span>
                    </div>
                </div>

                <div className="flex gap-4 items-end max-w-1/2">
                    <img src={selectedChat.picture} className="w-10 h-10 rounded-full mb-5" alt="" />
                    <div>
                        <p className="bg-cyan-700/50 p-3 rounded-2xl">
                            Oh no! What are you saying?
                            Maybe you are struggling, but you are not a failure.
                            Maybe you should try some more, and God will make you successful.
                        </p>
                        <span className="text-gray-700 text-sm"> Yesterday </span>
                    </div>
                </div>

                {/* msg */}
                <div className="flex gap-4 items-end flex-row-reverse ml-auto max-w-1/2">
                    <img src={selectedChat.picture} className="w-10 h-10 rounded-full mb-5" alt="" />
                    <div>
                        <p className="bg-cyan-700/50 p-3 rounded-2xl">
                            I'm just sitting aimlessly, thinking what to do, how to do, and when to do!
                            I'm such a failure, I should have died!
                        </p>
                        <span className="text-gray-700 text-sm"> Yesterday </span>
                    </div>
                </div>

                {/* msg revs */}
                <div className="flex gap-4 items-end max-w-1/2 ">
                    <img src={selectedChat.picture} className="w-10 h-10 rounded-full mb-5" alt="" />
                    <div>
                        <p className="bg-cyan-700/50 p-3 rounded-2xl">
                            I'm good. What are you doing?
                        </p>
                        <span className="text-gray-700 text-sm"> Yesterday </span>
                    </div>
                </div>
                {/* msg revs */}
                <div className="flex flex-row-reverse gap-4 items-end max-w-1/2 ml-auto">
                    <img src={selectedChat.picture} className="w-10 h-10 rounded-full mb-5" alt="" />
                    <div>
                        <p className="bg-cyan-700/50 p-3 rounded-2xl">
                            Hi! I'm fine. How are you?
                        </p>
                        <span className="text-gray-700 text-sm"> Yesterday </span>
                    </div>
                </div>

                {/* msg */}
                <div className="flex gap-4 items-end max-w-1/2">
                    <img src={selectedChat.picture} className="w-10 h-10 rounded-full mb-5" alt="" />
                    <div>
                        <p className="bg-cyan-700/50 p-3 rounded-2xl">
                            Hi there! How are you?
                        </p>
                        <span className="text-gray-700 text-sm"> Yesterday </span>
                    </div>
                </div>


            </div>

            <div className={`w-full flex items-center gap-4 mb-3 ${showChatInfo ? 'pr-0' : 'pr-3'}`}

            >
                <div className="flex-1 flex items-center gap-3 border border-gray-600 rounded-full px-6 bg-slate-400/10">
                    <input type="text" name="" id="" placeholder="Type msg..." className="flex-1 py-4 outline-none" />
                    <input type="file" name="" id="img" accept="img/*" className="hidden" />
                    <label htmlFor="img" className="cursor-pointer hover:opacity-70 active:opacity-20 transition">
                        <CgAttachment size={25} />
                    </label>
                </div>
                <button className="bg-slate-400/20 rounded-full w-14 h-14 text-center flex items-center justify-center cursor-pointer hover:bg-slate-400/40 active:bg-slate-500/20 transition">
                    <BiSend size={23} />
                </button>
            </div>
        </div >
    )
}

export default ChatContainer