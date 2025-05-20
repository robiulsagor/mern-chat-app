import { AiOutlineVerticalRight } from "react-icons/ai";
import { BiInfoCircle, BiSend } from "react-icons/bi";
import { CgAttachment } from "react-icons/cg";
import { GrAttachment } from "react-icons/gr";
import { ImAttachment } from "react-icons/im";
import { MdImageAspectRatio } from "react-icons/md";
import { RiAttachmentFill } from "react-icons/ri";

const ChatContainer = ({ selectedChat, showChatInfo, setShowChatInfo }) => {
    console.log("selectedChat", selectedChat);

    return (
        <div className="relative flex flex-col ">
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
            <div className="flex-1">
                <h2>hi there</h2>
            </div>

            <div className={`flex items-center gap-4 mb-3 ${showChatInfo ? 'pr-0' : 'pr-3'}`}

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