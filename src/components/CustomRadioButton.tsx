import { FC } from "react";

interface Props {
    id: string;
    name: string;
    initialValue: string;
    checked: boolean;
    onSelect: (value: string) => void;
    disabled?: boolean
}

const CustomRadioButton: FC<Props> = ({id, name, initialValue, checked, onSelect, disabled}) => {
    const handleChange = () => {
        onSelect(initialValue);
    };

    return (
        <label className="inline-flex items-center w-[50%]">
            <input  
                type="radio" 
                id={id}
                name={name}
                value={initialValue}
                checked={checked}
                onChange={handleChange}
                className="hidden"
                disabled={disabled}    
            />
            <span className="w-6 h-6 mr-2 rounded-full border-2 border-dark_green flex items-center justify-center">
                {checked && <span className="w-3 h-3 rounded-full bg-dark_green"></span>}
            </span>
            <span className="text-3xl">{initialValue}</span>
        </label>
    );
};

export default CustomRadioButton;
