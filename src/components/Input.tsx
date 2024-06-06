import { FC, useState } from "react";

interface Props {
    type: "text" | "password" | "email";
    placeholder: string;
    errorMessage?: string;
    name: string
    initialValue: string;
    handleChange: (e: any) => void;
    required?: boolean
}

const Input: FC<Props> = ({type, placeholder, errorMessage = "", name, initialValue, handleChange, required = false}) => {
    const [value, setValue] = useState(initialValue);

    const handleSetValue = (e: any) => {
        setValue(e.target.value);
        handleChange(e);
    }

    return (
        <div>
            <div className="relative flex justify-center">
                <input 
                    type={type} 
                    placeholder={placeholder} 
                    className={`max-w-[556px] border-b-2 border-x-0 border-t-0 w-full text-2xl text-dark_green focus:outline-0 px-4 ${!errorMessage ? "border-dark_green placeholder:text-dark_green my-3" : "border-red placeholder:text-red"}`} 
                    name={name}
                    value={value}
                    onChange={(e) => handleSetValue(e)}
                    required={required}/>
                {errorMessage && (
                    <div className="absolute center-y right-0">
                        <img src="input-error.png" alt="error" />
                    </div>
                )}
            </div>
            {errorMessage && (
                <div className="px-4 text-red text-base">
                    {errorMessage}
                </div>
            )}
        </div>
    )
}

export default Input;