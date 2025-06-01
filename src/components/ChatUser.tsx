import { useDispatch, useSelector } from "react-redux"
import { getSelectedChat, selectChat } from "../redux/chatSlice"
import type { UserType } from "../data"
import { RxAvatar } from "react-icons/rx"



const ChatUser = ({ data }: { data: UserType }) => {
    const dispatch = useDispatch()
    const selectedChat = useSelector(getSelectedChat) as UserType | null

    return (
        <div className={`flex justify-between items-center rounded-lg  px-2.5 py-3 cursor-pointer  transition ${selectedChat?._id === data._id ? 'bg-slate-600/20' : 'hover:bg-slate-600/20'}`}
            onClick={() => dispatch(selectChat({ ...data, unseenMessages: 0, test: true }))}>
            <div className="flex gap-4">
                {
                    data.profilePicture ? <img src={data.profilePicture} className="block w-11 h-11 rounded-full " /> : (
                        <RxAvatar className=" w-11 h-11 rounded-full text-slate-400 flex items-center justify-center" size={44} title="No profile picture" />
                    )
                }


                <div className="flex flex-col justify-center">
                    <h1 className="text-lg font-semibold text-white">
                        {data.name}
                    </h1>
                    <p className="text-sm text-slate-400">Lorem ipsum dolor sit amet.</p>
                </div>
            </div>

            {data.unseenMessages > 0 && (
                <span className="h-8 w-8 flex items-center justify-center rounded-full bg-slate-700 text-sm">{data?.unseenMessages} </span>

            )}
        </div>
    )
}

export default ChatUser