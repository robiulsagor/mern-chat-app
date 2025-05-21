import { motion } from "motion/react"
import SiteHeader from "../components/SiteHeader"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Loading from "../components/Loading"

const MODES = {
    EMAIL: "EMAIL",
    OTP: "OTP",
    PASSWORD: "PASSWORD"
}
type MODES = typeof MODES[keyof typeof MODES]

const ForgotPassword = () => {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    const [mode, setMode] = useState<MODES>(MODES.EMAIL)
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')

    const submitEmail = async () => {
        if (!email) return alert("Please enter your email")
        if (!email.includes('@')) return alert("Please enter a valid email")
        alert(email)
        setMode(MODES.OTP)
    }

    const submitOtp = async () => {
        if (!otp) return alert("Please enter your OTP")
        if (otp.length < 6) return alert("Please enter a valid OTP")
        alert(otp)
        setMode(MODES.PASSWORD)
    }

    const submitPassword = async () => {
        if (!password) return alert("Please enter your password")
        if (password.length < 6) return alert("Please enter a valid password")
        if (password !== password2) return alert("Passwords do not match")
        alert("Password reset successfully")
        setMode(MODES.EMAIL)
        navigate('/login')
    }

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setIsError(false)

        try {
            if (mode === MODES.EMAIL) {
                await submitEmail()
            } else if (mode === MODES.OTP) {
                await submitOtp()
            } else {
                await submitPassword()
            }
        } catch (error) {
            setIsError(true)
            console.error(error)
        } finally {
            setIsLoading(false)
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

                {/* reuseable form calling */}

                <motion.div
                    initial={{ x: -250 }}
                    animate={{ x: 0, opacity: 1 }}
                    className=" bg-slate-100/10 rounded-2xl p-5 md:p-8"
                >

                    <div>
                        <h2 className="text-xl md:text-2xl">
                            Reset Password
                        </h2>
                        <p className="mt-1 text-slate-400 text-sm">
                            {mode === MODES.EMAIL ? "Enter your email address to receive an OTP" :
                                mode === MODES.OTP ? "Enter the OTP sent to your email" :
                                    "Enter your new password"}
                        </p>
                    </div>

                    <form className="flex flex-col gap-4 mt-6 sm:min-w-[290px] md:min-w-[320px]">
                        <input
                            type={mode === MODES.EMAIL ? 'email' : mode === MODES.OTP ? 'text' : 'password'} placeholder={mode === MODES.EMAIL ? 'Enter email address' :
                                mode === MODES.OTP ? 'Enter OPT ' : 'Enter password'}
                            value={mode === MODES.EMAIL ? email : mode === MODES.OTP ? otp : password}
                            onChange={(e) => {
                                if (mode === MODES.EMAIL) setEmail(e.target.value)
                                else if (mode === MODES.OTP) setOtp(e.target.value)
                                else setPassword(e.target.value)
                            }}
                            className="border border-slate-50/50 w-full py-1.5 px-2 rounded-md"
                        />

                        {
                            mode === MODES.PASSWORD && (
                                <input
                                    type='password' placeholder='Retype password'
                                    value={password2}
                                    onChange={(e) => setPassword2(e.target.value)}
                                    className="border border-slate-50/50 w-full py-1.5 px-2 rounded-md"
                                />
                            )
                        }

                        {
                            !isLoading && isError && <p className="text-red-500 text-sm">{isError}</p>
                        }

                        {
                            isLoading ? <Loading /> :
                                <button
                                    className="bg-sky-700 text-slate-200 py-1.5 rounded-md hover:bg-sky-700/60 transition-all duration-200 cursor-pointer"
                                    onClick={submitHandler}>
                                    {
                                        mode === MODES.EMAIL ? 'Send OTP' :
                                            mode === MODES.OTP ? 'Verify OTP' : 'Reset Password'
                                    }
                                </button>}

                    </form>

                    {
                        mode === MODES.EMAIL ? (
                            <p className="mt-5 text-sky-400 cursor-pointer text-sm w-fit hover:text-sky-400/50 transition-all duration-200"
                                onClick={() => setMode(MODES.OTP)}>
                                I already received a reset email/OTP
                            </p>) : mode === MODES.OTP ? (
                                <p className="mt-5 text-sky-400 cursor-pointer text-sm w-fit hover:text-sky-400/50 transition-all duration-200"
                                    onClick={() => setMode(MODES.EMAIL)}>
                                    Resend email
                                </p>)
                            : ""
                    }

                    <Link to={'/login'}
                        className="text-sm mt-4 inline-block text-sky-500 py-1  rounded-md hover:text-sky-500/50 transition">
                        Back to Login
                    </Link>

                </motion.div>
            </div>
        </div >
    )
}

export default ForgotPassword