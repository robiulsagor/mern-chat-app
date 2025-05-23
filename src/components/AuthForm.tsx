import { motion } from "motion/react"
import { Link, useNavigate } from "react-router-dom"
import { loginInputs, registerInputs, TYPES } from "../data"
import React, { useState } from "react"
import InputField from "./InputField"
import axios from "axios"
import { useDispatch } from "react-redux"
import { setUser } from "../redux/userSlice"

type AuthFormProps = {
    type: string
}

export type UserDataProps = {
    name: string,
    email: string,
    password: string,
    password2?: string
}

const AuthForm = ({ type }: AuthFormProps) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [userData, setUserData] = useState<UserDataProps>({
        name: '',
        email: '',
        password: '',
        password2: ''
    })

    const handleInputChange = (value: string, name: string) => {
        setUserData({
            ...userData, [name]: value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            if (type === TYPES.SIGNUP) {
                console.log("Registering user", userData)
            } else if (type === TYPES.SIGNIN) {
                const res = await axios.post('/api/auth/login', {
                    email: userData.email,
                    password: userData.password
                }, {
                    withCredentials: true
                })

                if (res.data.success) {
                    console.log("User logged in successfully", res.data.user)
                    dispatch(setUser(res.data.user))
                    navigate("/")
                } else {
                    console.log("Login failed", res.data.message)
                }

            } else {
                console.log("Resetting password for", userData.email)
            }
        }
        catch (error) {
            console.log("Error Occured: ", error);
        }
    }

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

                <button className="bg-sky-700  text-slate-200 py-1.5 rounded-md
                         hover:bg-sky-700/60 transition-all duration-200 cursor-pointer">
                    {type === TYPES.SIGNUP ? "Register" : type === TYPES.SIGNIN ? "Login" : "Reset Password"}
                </button>
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