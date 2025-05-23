import { motion } from "motion/react"
import SiteHeader from "../components/SiteHeader"
import { useNavigate } from "react-router-dom"
import React, { useState } from "react"
import Loading from "../components/Loading"
import { RxAvatar } from "react-icons/rx"
import axios from "axios"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { getLoggedInUser, updateUserBio } from "../redux/userSlice"
import type { UserType } from "../data"


const UpdataProfile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userData = useSelector(getLoggedInUser) as UserType | null

    const name = userData?.name as string
    const [bio, setBio] = useState(userData?.bio || "")
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState("")


    const updateProfile = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            setIsLoading(true)
            setIsError("")
            const res = await axios.patch('api/user/update-profile', { bio })
            if (res.data.success) {
                setIsLoading(false)
                setBio("")
                toast.success("Profile updated!")
                dispatch(updateUserBio(bio))
                navigate("/")
            }

        } catch (error) {
            console.log(error);
            setIsLoading(false)
            setIsError("Error updating profile")
        }
    }

    return (
        <div className='h-screen flex items-center justify-center text-white bg-black/50 scrollbar-hide '>
            <div className=" md:w-[75%] lg:w-[50%] xl:w-[45%] rounded-xl flex flex-col md:flex-row gap-10 md:gap-6 items-center justify-between">
                <motion.div
                    initial={{ x: 250, opacity: .4 }}
                    animate={{ x: 0, opacity: 1 }}>
                    <SiteHeader />
                    <p className="text-center mt-2 text-slate-400">Chat with friends fast!</p>
                </motion.div>

                <motion.div
                    initial={{ x: -250 }}
                    animate={{ x: 0, opacity: 1 }}
                    className=" bg-slate-100/10 rounded-2xl p-5 md:p-8"
                >
                    <div>
                        <h2 className="text-xl md:text-2xl">
                            Update Profile
                        </h2>

                    </div>

                    <form onSubmit={updateProfile} className="flex flex-col gap-4 mt-6 sm:min-w-[290px] md:min-w-[320px]">
                        <div className="flex items-center gap-2">
                            <RxAvatar size={30} className="text-slate-400  " />
                            <label htmlFor="avatar" className="cursor-pointer hover:text-slate-400 transition">Upload profile picture</label>
                            <input type="file" id="avatar" className="hidden" />
                        </div>

                        <input
                            type='text' placeholder='Enter your name'
                            value={name}
                            disabled
                            className="border border-slate-50/50 w-full py-1.5 px-2 rounded-md 
                            disabled:cursor-not-allowed disabled:opacity-90 disabled:bg-slate-400/20"
                        />

                        <textarea name="bio" value={bio} onChange={e => setBio(e.target.value)}
                            placeholder="Bio"
                            className="border border-slate-50/50  py-1.5 px-2 rounded-md"></textarea>


                        {
                            !isLoading && isError && <p className="text-red-500 bg-red-400/10 text-sm p-2 rounded">{isError}</p>
                        }

                        {
                            isLoading ? <Loading />
                                : <>
                                    <button
                                        type="submit"
                                        className="bg-sky-700 text-slate-200 py-1.5 rounded-md hover:bg-sky-700/60 transition-all duration-200 cursor-pointer"
                                    >
                                        Update
                                    </button>
                                    <button type="button"
                                        className="border border-red-700/50 bg-red-800/70 text-slate-200 py-1.5 rounded-md hover:bg-red-700/60 transition-all duration-200 cursor-pointer"
                                        onClick={() => navigate('/')}
                                    >
                                        Cancel
                                    </button>
                                </>
                        }

                    </form>

                </motion.div>
            </div>
        </div >
    )
}

export default UpdataProfile