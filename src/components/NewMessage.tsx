import React, { useState } from "react";
import { BiSend } from "react-icons/bi"
import { CgAttachment } from "react-icons/cg"
import axiosInstance from "../axiosInstance";
import { useDispatch } from "react-redux";
import { replaceOptimisticFailedMessages, replaceOptimisticMessages, setOptimisticMessages } from "../redux/chatSlice";

const NewMessage = ({ receiverId, senderId }: { receiverId: string, senderId: string }) => {
    const [msg, setMsg] = useState<string>("");
    const dispatch = useDispatch();

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!msg.trim()) return;

        const tempId = Date.now().toString() + Math.random().toString(36).substring(2, 15);
        const newMsg = {
            id: tempId, // Temporary ID for optimistic UI update
            senderId, receiverId, content: msg, seen: false, timestamp: new Date().toISOString(),
            isSending: true
        }
        dispatch(setOptimisticMessages(newMsg));

        try {
            const res = await axiosInstance.post('/message/send', {
                content: msg,
                receiverId
            })
            if (res.data.success) {
                const realMsg = res.data.newMessage
                dispatch(replaceOptimisticMessages({ tempId, realMsg }))
            }

        } catch (error) {
            console.log(error);
            dispatch(replaceOptimisticFailedMessages({ ...newMsg, isSending: false, isError: true }))
        }
        setMsg("");
    }

    return (
        <form onSubmit={handleSendMessage} className={`w-full flex items-center gap-4 mb-3`}
        >
            <div className="flex-1 flex items-center gap-3 border border-gray-600 rounded-full px-6 bg-slate-400/10">
                <input type="text" value={msg} onChange={e => setMsg(e.target.value)}
                    placeholder="Type msg..." className="flex-1 py-4 outline-none" />
                <input type="file" name="" id="img" accept="img/*" className="hidden" />
                <label htmlFor="img" className="cursor-pointer hover:opacity-70 active:opacity-20 transition">
                    <CgAttachment size={25} />
                </label>
            </div>
            <button
                type="submit"
                disabled={!msg.trim()}
                className="bg-slate-400/20 rounded-full w-14 h-14 text-center flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:hover:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-slate-400/20  hover:bg-slate-400/40 active:bg-slate-500/20 transition">
                <BiSend size={23} />
            </button>
        </form>
    )
}

export default NewMessage