import type { RegisterInputType } from "../data"
import type { UserDataProps } from "./AuthForm"

type InputFieldProps = {
    data: RegisterInputType;
    handleInputChange: (value: string, field: string) => void;
    userData: UserDataProps;
};

const InputField = ({ data, userData, handleInputChange }: InputFieldProps) => {
    return (
        <input key={data.id}
            autoFocus={data.id === 1} // autofocus on the first input
            type={data.type} placeholder={data.placeholder}
            value={userData[data.val as keyof UserDataProps]}
            onChange={(e) => handleInputChange(e.target.value, data.val)}
            className="border border-slate-50/30 w-full py-1.5 px-2 rounded-md focus:outline-none focus:border-slate-200/50"
        />
    )
}

export default InputField