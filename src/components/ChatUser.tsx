import type { ChatUserProps } from "../data"

const ChatUser = ({ data, selectedChat, setSelectedChat }: ChatUserProps) => {

    return (
        <div className={`flex justify-between items-center rounded-lg  px-2.5 py-3 cursor-pointer  transition ${selectedChat.id === data.id ? 'bg-slate-600/20' : 'hover:bg-slate-600/20'}`}
            onClick={() => setSelectedChat(data)}>
            <div className="flex gap-4">
                <img src={data.picture} className="block w-11 h-11 rounded-full " />
                <div className="flex flex-col justify-center">
                    <h1 className="text-lg font-semibold text-white">
                        {data.name}
                    </h1>
                    <p className="text-sm text-slate-400">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            <span className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-700 text-sm">10</span>
        </div>
    )
}

export default ChatUser