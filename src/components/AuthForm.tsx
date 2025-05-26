import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { loginInputs, registerInputs, TYPES } from "../data"
import React, { useEffect, useState } from "react"
import InputField from "./InputField"
import { AxiosError } from "axios"
import { useDispatch } from "react-redux"
import { setUser } from "../redux/userSlice"
import Loading from "./Loading"
import { toast } from "react-toastify"
import axiosInstance from "../axiosInstance"

type AuthFormProps = {
    type: string
}

export type UserDataProps = {
    name: string,
    email: string,
    password: string,
    password2?: string
}

interface ErrorResponse {
    message: string;
}

const AuthForm = ({ type }: AuthFormProps) => {
    const dispatch = useDispatch()
    const [userData, setUserData] = useState<UserDataProps>({
        name: '',
        email: '',
        password: '',
        password2: ''
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)

    const handleInputChange = (value: string, name: string) => {
        setUserData({
            ...userData, [name]: value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        let action = "";
        try {
            setLoading(true)
            setError(null)
            let res;

            switch (type) {
                case TYPES.SIGNUP:
                    action = "Registering";
                    res = await axiosInstance.post("/api/auth/register", userData, { withCredentials: true });
                    break;
                case TYPES.SIGNIN:
                    action = "Logging in";
                    res = await axiosInstance.post('/api/auth/login', userData, {
                        withCredentials: true
                    })
                    break;
                case TYPES.FORGOT_PASSWORD:
                    action = "Resetting password";
                    res = await axiosInstance.post("/api/auth/reset-password", userData);
                    break;
            }

            setLoading(false)
            if (res?.data?.user) {
                dispatch(setUser(res.data.user))
            }

            toast.success("Success!");
        } catch (err) {
            const error = err as AxiosError<ErrorResponse>;
            setLoading(false)
            setError(`${action} failed: ${error?.response?.data?.message || "Something went wrong"}`)
            toast.error(`${action} failed: ${error?.response?.data?.message || "Something went wrong"}`);
        }

    }

    // Check if the button should be disabled
    // based on the input fields
    useEffect(() => {
        if (type === TYPES.SIGNIN) {
            if (!userData.email || !userData.password) {
                setIsButtonDisabled(true)
            } else {
                setIsButtonDisabled(false)
            }
        } else if (type === TYPES.SIGNUP) {
            if (!userData.name || !userData.email || !userData.password || !userData.password2) {
                setIsButtonDisabled(true)
            } else {
                setIsButtonDisabled(false)
            }
        }
    }, [userData, type])

    return (
        <motion.div
            initial={type === TYPES.SIGNUP ? { x: 250 } : { x: -250 }}
            animate={{ x: 0, opacity: 1 }}
            className=" bg-slate-100/10 rounded-2xl p-5 md:p-8"
        >
            <h2 className="text-xl md:text-2xl">
                {type === TYPES.SIGNUP ? "Sign Up" :
                    type === TYPES.SIGNIN ? "Sign In" :
                        "Reset Password"}
            </h2>

            {/* error message */}
            {
                error && (
                    <div className="bg-red-500/10 text-red-500 p-2 rounded-md mt-4">
                        {error}
                    </div>
                )
            }

            <form onSubmit={handleSubmit}
                className="flex flex-col gap-4 mt-4 sm:min-w-[290px] md:min-w-[320px]">
                {
                    type === TYPES.SIGNUP ? (
                        registerInputs.map(data => (
                            <InputField key={data.id}
                                data={data}
                                handleInputChange={handleInputChange}
                                userData={userData}
                            />
                        ))
                    ) :
                        type === TYPES.SIGNIN ? (
                            loginInputs.map(data => (
                                <InputField key={data.id}
                                    data={data}
                                    handleInputChange={handleInputChange}
                                    userData={userData}
                                />
                            ))
                        ) : (
                            <input type="email" placeholder="Email Address"
                                value={userData.email}
                                onChange={(e) => handleInputChange(e.target.value, 'email')}
                                className="border border-slate-50/50 w-full py-1.5 px-2 rounded-md"
                            />
                        )
                }

                {
                    loading ? <Loading /> :
                        <button
                            className={`bg-sky-700 text-slate-200 py-1.5 rounded-md
                         enabled:hover:bg-sky-700/60 transition-all duration-200 cursor-pointer
                         disabled:opacity-50 disabled:cursor-not-allowed`}
                            disabled={isButtonDisabled}
                            type="submit"
                        >
                            {type === TYPES.SIGNUP ? "Register" : type === TYPES.SIGNIN ? "Login" : "Reset Password"}
                        </button>
                }
            </form>

            {
                type === TYPES.SIGNIN && (
                    <Link to="/forgot-password" className="text-sky-500 text-sm mt-6 inline-block hover:text-sky-500/50 transition">
                        Forgot Password?
                    </Link>
                )
            }

            <span className="text-slate-300 text-sm mt-6 block">
                {type === TYPES.SIGNUP ? "Alreday have an accout?" : type === TYPES.SIGNIN ? "Don't have an accout?" : ""}


                <Link to={type === TYPES.SIGNUP ? '/login' : type === TYPES.SIGNIN ? '/register' : '/login'} className="text-sky-500 py-1 px-1.5 rounded-md hover:text-sky-500/50 transition">
                    {type === TYPES.SIGNUP ? 'Login' : type === TYPES.SIGNIN ? 'Register' : 'Back to Login'} now
                </Link>
            </span>

        </motion.div>
    )
}

export default AuthForm