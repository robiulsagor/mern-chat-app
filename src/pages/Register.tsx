import { motion } from "motion/react"
import SiteHeader from "../components/SiteHeader"
import AuthForm from "../components/AuthForm"
import { TYPES } from "../data"

const Register = () => {
    return (
        <div className='h-screen flex items-center justify-center text-white bg-black/50 scrollbar-hide '>
            <div className=" md:w-[75%] lg:w-[60%] xl:w-[45%] rounded-xl flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-6 ">
                <motion.div
                    initial={{ x: -250, opacity: .4 }}
                    animate={{ x: 0, opacity: 1 }}
                >
                    <SiteHeader />
                    <p className="text-center mt-2 text-slate-400">Chat with friends fast!</p>
                </motion.div>

                {/* reuseable form calling */}
                <AuthForm
                    type={TYPES.SIGNUP}
                />

            </div>
        </div>
    )
}

export default Register