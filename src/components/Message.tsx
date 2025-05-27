import type { MessageType, UserType } from "../data"

const Message = ({ msg, loginUser, selectedChat }: { msg: MessageType, loginUser: UserType, selectedChat: UserType }) => {
    return (
        <div className={`flex justify-items-end gap-4 items-end max-w-1/2 ${msg.receiverId === selectedChat?._id && 'flex-row-reverse ml-auto'} `}>
            <img
                src={msg.senderId === loginUser?._id ? loginUser?.profilePicture : selectedChat?.profilePicture}
                className="w-10 h-10 rounded-full mb-5" alt="" />
            <div>
                <p className="bg-cyan-700/50 p-3 rounded-2xl">
                    {msg.content}
                </p>
                <span className={`text-gray-700 mt-0.5 text-sm block ${msg.senderId === loginUser?._id ? 'text-right' : 'text-left'}`}> Yesterday </span>
            </div>
        </div>
    )
}

export default Message