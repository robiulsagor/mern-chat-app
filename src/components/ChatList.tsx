import { BsThreeDotsVertical } from "react-icons/bs"
import { CiSearch } from "react-icons/ci"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import { users } from "../data.ts"
import ChatUser from "./ChatUser.js"

const ChatList = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [chatList, setChatList] = useState(users)

    return (
        <div className="overflow-hidden flex flex-col">
            <div className="flex justify-between items-center bg-[#1E1E2F] p-4">
                <div className="flex items-center gap-4">
                    <img src="./icon1.1.svg" alt="icon" className="w-10 h-10 text-white" />
                    <h1 className="text-2xl font-semibold text-white">FastChat</h1>
                </div>
                <div className="cursor-pointer text-white hover:bg-[#2E2E4D] active:bg-[#1E1E2D] p-2 rounded-full transition group relative"
                >
                    <BsThreeDotsVertical size={22} />

                    <div className="absolute top-full right-0 w-[150px] border border-slate-600 bg-slate-800/90 rounded-lg hidden group-hover:block p-2">
                        <div className="flex flex-col gap-0.5">
                            <NavLink to='/profile'
                                className=" px-3 py-1.5 rounded-md hover:bg-slate-400/10 transition">
                                Edit Profile</NavLink>
                            <span className="block px-3 py-1.5 rounded-md hover:bg-slate-400/10 transition">Logout</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* header - title */}

            <div className="bg-slate-800 rounded-full py-2  mt-4 mx-4 flex items-center gap-2 px-4">
                <label htmlFor="search-bar" className="cursor-pointer hover:opacity-60">
                    <CiSearch size={22} />
                </label>

                <input type="text" id="search-bar" className="flex-1 border-none outline-none " placeholder="Search here..." />
            </div>
            {/* search bar */}


            <div className="h-full flex flex-col gap-0.5 px-4 mt-4 overflow-y-scroll scrollbar-hide">
                {
                    chatList.map((user) => (
                        <ChatUser data={user} key={user.id} />
                    ))
                }

            </div>
            {/* chat list */}
        </div>
    )
}

export default ChatList