import { FC, useState } from "react";
import CustomRadioButton from "./CustomRadioButton";

interface Props {
    index: number,
    question: string,
    answers: string[]
    disabled?: boolean,
    onAnswerChange?: (index: number, answer: string) => void,
}

const generateRandomKey = () => `${Date.now()}-${Math.random()}`;

const TestQuestion: FC<Props> = ({index, question, answers, disabled, onAnswerChange}) => {
    const [selectedAnswer, setSelectedAnswer] = useState<string>("");

    const handleAnswerSelection = (value: string) => {
        setSelectedAnswer(value);
        if(onAnswerChange) {
            onAnswerChange(index, value);
        }
    };

    return (
        <div className="min-w-[1262px] bg-white pb-14 pt-4 border-4 border-dark_green border-l-0 rounded-r-[20px] z-50">
            <div className="flex">
                <h3 className="bg-white border-4 border-l-0 border-dark_green rounded-r-[20px] text-2xl py-3.5 px-14">Запитання {index}</h3>
            </div>
            <div>
                <h4 className="text-3xl px-14 py-6">{question}</h4>
            </div>
            <div className="relative flex justify-center">
                <div className="px-6 bg-white z-30 text-2xl">Варіанти відповідей</div>
                <div className="w-full h-[1px] bg-dark_green absolute center-y"></div>
            </div>
            <div>
                <div className="grid grid-rows-2 grid-flow-col gap-9 pl-[160px] pt-9">
                    {answers.map((answer, index) => (
                        <CustomRadioButton id={index.toString()} checked={selectedAnswer === answer} name={`answer_${index}`} initialValue={answer} onSelect={handleAnswerSelection} key={generateRandomKey()} disabled={disabled}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestQuestion;
