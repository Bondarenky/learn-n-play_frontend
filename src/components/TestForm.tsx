import { FC } from "react";
import InputRadioButton from "./InputRadioButton";

interface Props {
    type: string;
    question: string;
    answers: string[];
    setQuestion: (value: string) => void;
    setAnswers: (value: string[]) => void;
    correctAnswerId: string | null;
    setCorrectAnswerId: (id: string) => void;
}

const TestForm: FC<Props> = ({ type, question, answers, setQuestion, setAnswers, correctAnswerId, setCorrectAnswerId }) => {

    const handleChangeQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.target.value);
    }

    const handleChangeCorrectAnswer = (id: string) => {
        setCorrectAnswerId(id)
    }

    const handleChangeAnswer = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newAnswers = [...answers];
        newAnswers[index] = e.target.value;
        setAnswers(newAnswers);
    }


    return (
        <div className="min-w-[1262px] bg-white pb-14 pt-4 border-4 border-dark_green border-l-0 rounded-r-[20px] z-50">
            <div className="px-12 my-6">
                <input className="text-3xl w-full" type={type} name="question" placeholder="Умова завдання" value={question} onChange={handleChangeQuestion}/>
            </div>
            <div className="relative flex justify-center">
                <div className="px-2 bg-white z-30 text-base">Варіанти відповідей</div>
                <div className="w-full h-[1px] bg-dark_green absolute center-y"></div>
            </div>
            <div>
                <input defaultValue={correctAnswerId || ""} className="hidden" name="correct_answer"/>
                <div className="grid grid-rows-2 grid-flow-col gap-9 pl-32 pt-9">
                    {[0, 1, 2, 3].map((item) => (
                        <InputRadioButton 
                            checked={correctAnswerId === `${item + 1}`} 
                            name={`answer_${item + 1}`} 
                            id={`${item + 1}`} 
                            initialValue={answers[item]} 
                            key={item}
                            onChange={(e: any) => handleChangeAnswer(e, item)} 
                            onChangeCorrect={handleChangeCorrectAnswer}
                            />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TestForm;