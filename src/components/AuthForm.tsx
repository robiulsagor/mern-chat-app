import { motion } from "motion/react"
import { Link } from "react-router-dom"
import { loginInputs, registerInputs, TYPES } from "../data"
import { useState } from "react"

type AuthFormProps = {
    type: string
}

type UserDataProps = {
    name: string,
    email: string,
    password: string,
    password2: string
}

const AuthForm = ({ type }: AuthFormProps) => {
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

    return (
        <motion.div
            initial={type === TYPES.SIGNUP ? { x: 250 } : { x: -250 }}
            animate={{ x: 0, opacity: 1 }}
            className=" bg-slate-100/10 rounded-2xl p-5 md:p-8"
        >
            <h2 className="text-xl md:text-2xl">
                {type === "SIGNUP" ? "Sign Up" : "Sign In"}
            </h2>

            <form className="flex flex-col gap-4 mt-4 sm:min-w-[290px] md:min-w-[320px]">
                {
                    type === TYPES.SIGNUP ? (
                        registerInputs.map(data => (
                            <input key={data.id}
                                type={data.type} placeholder={data.placeholder}
                                value={userData[data.val]}
                                onChange={(e) => handleInputChange(e.target.value, data.val)}
                                className="border border-slate-50/30 w-full py-1.5 px-2 rounded-md focus:outline-none focus:border-slate-200/50"
                            />
                        ))
                    ) : (
                        loginInputs.map(data => (
                            <input key={data.id} type={data.type} placeholder={data.placeholder}
                                value={userData[data.val]}
                                onChange={(e) => handleInputChange(e.target.value, data.val)}
                                className="border border-slate-50/50 w-full py-1.5 px-2 rounded-md"
                            />
                        ))
                    )
                }

                <button className="bg-sky-700  text-slate-200 py-1.5 rounded-md
                         hover:bg-sky-700/60 transition-all duration-200 cursor-pointer">
                    {type === TYPES.SIGNUP ? "Register" : "Login"}
                </button>
            </form>

            <span className="text-slate-300 text-sm mt-6 block"> {type === TYPES.SIGNUP ? "Alreday " : "Don't "} have an accout?
                <Link to={type === TYPES.SIGNUP ? '/login' : '/register'} className="text-sky-500 py-1 px-1.5 rounded-md hover:text-sky-500/50 transition">
                    {type === TYPES.SIGNUP ? 'Login' : 'Register'} now
                </Link>
            </span>

        </motion.div>
    )
}

export default AuthForm