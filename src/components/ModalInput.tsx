import { ChangeEvent, FC, useEffect, useState } from "react"

interface Props{
    name: string;
    initialValue: string;
    handleChange: (e: any) => void;
    placeholder: string;
    disabled?: boolean
}

const ModalInput: FC<Props> = ({name, initialValue, handleChange, placeholder, disabled = false}) => {

    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        handleChange(e);
    };

    return (
        <div>
            <input 
                type="text" 
                name={name} 
                placeholder={placeholder}  
                className="px-9 py-6 text-5xl bg-black/30 placeholder:text-white rounded-[20px] text-white" 
                value={value} 
                onChange={handleChangeValue}
                disabled={disabled}
            />
        </div>
    )
}

export default ModalInput;