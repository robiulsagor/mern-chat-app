import { BiInfoCircle } from "react-icons/bi";
import NoMessages from "./NoMessages";
import UserActiveIcon from "./UserActiveIcon";
import { useSelector } from "react-redux";
import { getLoggedInUser } from "../redux/userSlice";
import { getLoading, getMessages, getSelectedChat } from "../redux/chatSlice";
import type { MessageType, UserType } from "../data";
import { useEffect, useRef, type Dispatch, type SetStateAction } from "react";
import ProfilePicture from "./ProfilePicture";
import Loading from "./Loading";
import Message from "./Message";
import NewMessage from "./NewMessage";
import { useIsUserOnline } from "../hooks/useIsUserOnline";

const ChatContainer = ({ showChatInfo, setShowChatInfo }:
    { showChatInfo: boolean, setShowChatInfo: Dispatch<SetStateAction<boolean>> }) => {

    const loginUser = useSelector(getLoggedInUser) as UserType | null
    const selectedChat = useSelector(getSelectedChat) as UserType | null
    const messageList = useSelector(getMessages) as MessageType[] | null
    const isLoading = useSelector(getLoading)
    const initialLoadRef = useRef(true);
    const bottomRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // auto scroll to bottom when messageList changes
    useEffect(() => {
        if (!bottomRef.current || !containerRef.current) return;
        if (initialLoadRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
            initialLoadRef.current = false;
        } else {
            bottomRef.current.scrollIntoView({ behavior: 'smooth' });
        }

    }, [messageList]);

    useEffect(() => {
        initialLoadRef.current = true;
    }, [selectedChat])

    const isOnline = useIsUserOnline({ userId: selectedChat?._id });

    return (
        <div className={`relative flex flex-col justify-between  max-h-full overflow-hidden px-5 `}>
            {/* header part */}
            <div className="flex items-center justify-between py-3  border-b border-slate-600">
                <div className="flex items-center gap-3">

                    <ProfilePicture profilePicture={selectedChat?.profilePicture ?? ""} />

                    <div>
                        <h2 className="text-2xl font-semibold">{selectedChat?.name} </h2>
                        <div className="flex items-center gap-2">
                            <UserActiveIcon isActive={isOnline} />
                            <span className="text-sm text-slate-400">
                                {isOnline ? "Online" : "Offline"}
                            </span>
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
            <div ref={containerRef}
                className="overflow-y-scroll h-[100%] flex-1 py-2 flex flex-col gap-4 justify-end-safe scrollbar-hide">

                {isLoading ?
                    <div className="w-full h-screen flex items-center justify-center"><Loading /></div> :
                    messageList && messageList.length > 0 && loginUser && selectedChat ? messageList.map((msg, index) => (
                        <Message key={index} msg={msg} loginUser={loginUser} selectedChat={selectedChat} />
                    )) : <NoMessages selectedUser={selectedChat?.name ?? ""} />
                }

                <div ref={bottomRef}></div> {/* auto scroll to bottom */}
            </div>


            {/* msg input box */}
            <NewMessage receiverId={selectedChat?._id ? String(selectedChat._id) : ""}
                senderId={loginUser?._id ? String(loginUser._id) : ""} />
        </div >
    )
}

export default ChatContainer