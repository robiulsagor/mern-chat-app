import { useState } from "react";
import { motion } from "motion/react";
import type { MessageType, UserType } from "../data"
import ProfilePicture from "./ProfilePicture";

const Message = ({ msg, loginUser, selectedChat }: { msg: MessageType, loginUser: UserType, selectedChat: UserType }) => {
    const [showTime, setShowTime] = useState(false);

    const handleShowTime = () => {
        if (!msg.isError) {
            setShowTime(!showTime);
        }
    }

    return (
        <div className={`flex justify-items-end gap-4 items-end max-w-1/2 ${msg.receiverId === selectedChat?._id && 'flex-row-reverse ml-auto'} `}
            onClick={handleShowTime}>
            {
                msg.senderId !== loginUser?._id && (
                    <ProfilePicture
                        profilePicture={selectedChat?.profilePicture}
                    />
                )
            }

            <div>
                <p className={`bg-cyan-700/50 p-3 rounded-2xl ${msg.isError ? 'bg-cyan-300/10 opacity-65 border border-red-500' : ''}`}>
                    {msg.content}
                </p>
                {!msg.isError && showTime && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`text-gray-700 mt-0.5 text-sm block ${msg.senderId === loginUser?._id ? 'text-right' : 'text-left'}`}> Yesterday </motion.span>
                )}

                {msg.isError && (
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`text-red-700/70 mt-0.5 text-sm block ${msg.senderId === loginUser?._id ? 'text-right' : 'text-left'}`}> Failed </motion.span>
                )}
            </div>
        </div>
    )
}

export default Message