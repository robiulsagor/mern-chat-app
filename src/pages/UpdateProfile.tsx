import { motion } from "motion/react"
import SiteHeader from "../components/SiteHeader"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Loading from "../components/Loading"
import { RxAvatar } from "react-icons/rx"

const UpdataProfile = () => {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    const [isError, setIsError] = useState(false)

    const updateProfile = async () => {
        setIsLoading(true)
        setIsError(false)
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

                    <form className="flex flex-col gap-4 mt-6 sm:min-w-[290px] md:min-w-[320px]">
                        <div className="flex items-center gap-2">
                            <RxAvatar size={30} className="text-slate-400  " />
                            <label htmlFor="avatar" className="cursor-pointer hover:text-slate-400 transition">Upload profile picture</label>
                            <input type="file" id="avatar" className="hidden" />
                        </div>

                        <input
                            type='text' placeholder='Enter your name'
                            value={"Sagor"}
                            disabled
                            className="border border-slate-50/50 w-full py-1.5 px-2 rounded-md"
                        />

                        <textarea name="" id="" placeholder="Bio" className="border border-slate-50/50  py-1.5 px-2 rounded-md"></textarea>


                        {
                            !isLoading && isError && <p className="text-red-500 text-sm">{isError}</p>
                        }

                        {
                            isLoading ? <Loading />
                                : <>
                                    <button
                                        type="submit"
                                        className="bg-sky-700 text-slate-200 py-1.5 rounded-md hover:bg-sky-700/60 transition-all duration-200 cursor-pointer"
                                        onClick={updateProfile}
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