import { BsThreeDotsVertical } from "react-icons/bs"
import { CiSearch } from "react-icons/ci"
import { NavLink } from "react-router-dom"
// import { useState } from "react"
// import { users } from "../data.ts"
import ChatUser from "./ChatUser.js"
import SiteHeader from "./SiteHeader.tsx"
import { useDispatch, useSelector } from "react-redux"
import { getChatList } from "../redux/chatSlice.ts"
import type { UserType } from "../data.ts"
import { removeUser } from "../redux/userSlice.ts"


const ChatList = () => {
    const dispatch = useDispatch()
    const chatUserList = useSelector(getChatList) as UserType[] | null

    return (
        <div className="overflow-hidden flex flex-col bg-slate-700/10">
            <div className="flex justify-between items-center bg-[#1E1E2F] p-4">
                <SiteHeader />
                <div className="cursor-pointer text-white hover:bg-[#2E2E4D] active:bg-[#1E1E2D] p-2 rounded-full transition group relative"
                >
                    <BsThreeDotsVertical size={22} />

                    <div className="absolute top-full right-0 w-[150px] border border-slate-600 bg-slate-800/90 rounded-lg hidden group-hover:block p-2">
                        <div className="flex flex-col gap-0.5">
                            <NavLink to='/profile'
                                className=" px-3 py-1.5 rounded-md hover:bg-slate-400/10 transition">
                                Edit Profile</NavLink>
                            <span onClick={() => dispatch(removeUser())}
                                className="block px-3 py-1.5 rounded-md hover:bg-slate-400/10 transition">Logout</span>
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
                    chatUserList && chatUserList.length > 0 && chatUserList.map((user) => (
                        <ChatUser data={user} key={user.id} />
                    ))
                }

            </div>
            {/* chat list */}
        </div>
    )
}

export default ChatList