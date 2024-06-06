import { FC } from "react";

interface Props {
    id: string;
    name: string;
    initialValue: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeCorrect: (id: string) => void
}

const InputRadioButton: FC<Props> = ({id, name, initialValue, checked, onChange, onChangeCorrect}) => {

    return (
        <label className="inline-flex items-center w-[50%]">
            <input  
                type="radio" 
                id={id}
                name="correct_answer_selection"
                checked={checked}
                className="hidden"    
                onChange={() => onChangeCorrect(id)}
            />
            <div className="flex items-center">
                <span className="w-6 h-6 mr-2 rounded-full border-2 border-dark_green flex justify-center items-center">
                    {checked && <span className="w-3 h-3 rounded-full bg-dark_green"></span>}
                </span>
                <input
                    className="text-3xl"
                    name={name}
                    value={initialValue}
                    onChange={onChange}
                />
            </div>
        </label>
    );
};

export default InputRadioButton;
