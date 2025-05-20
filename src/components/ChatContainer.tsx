import { BiInfoCircle, BiSend } from "react-icons/bi";
import { CgAttachment } from "react-icons/cg";
import NoMessages from "./NoMessages";

const ChatContainer = ({ selectedChat, showChatInfo, setShowChatInfo, messageList, loginUser }) => {

    return (
        <div className={`relative flex flex-col justify-between  max-h-full overflow-hidden ${showChatInfo ? 'pr-0' : 'pr-3'}`}>
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
            <div className="overflow-y-scroll flex-1 py-2 flex flex-col gap-4 justify-end-safe scrollbar-hide">

                {
                    messageList && messageList.length > 0 ? messageList.map(msg => (
                        <div key={msg.id} className={`flex justify-items-end gap-4 items-end max-w-1/2 ${msg.receiverId === selectedChat.id && 'flex-row-reverse ml-auto'} `}>
                            <img
                                src={msg.senderId === loginUser.id ? loginUser.picture : selectedChat.picture}
                                className="w-10 h-10 rounded-full mb-5" alt="" />
                            <div>
                                <p className="bg-cyan-700/50 p-3 rounded-2xl">
                                    {msg.content}
                                </p>
                                <span className={`text-gray-700 mt-0.5 text-sm block ${msg.senderId === loginUser.id ? 'text-right' : 'text-left'}`}> Yesterday </span>
                            </div>
                        </div>
                    )) : <NoMessages selectedUser={selectedChat.name} />
                }
            </div>

            {/* msg input box */}
            <div className={`w-full flex items-center gap-4 mb-3`}

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