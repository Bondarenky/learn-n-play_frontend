import { FC, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import { useGetTestQuery, useSendTestMutation } from "../services/classes.service";
import { ITestSubmit, ITestSubmitQuestion } from "../types";
import TestQuestion from "../components/TestQuestion";

const Test: FC = () => {
    const { id, grade } = useParams();
    const [gradeState, setGradeState] = useState("");

    const {data: testData} = useGetTestQuery(id ?? "", {
        skip: id === ""
    });

    const [answers, setAnswers] = useState<ITestSubmitQuestion[]>([])
    const [isComplete, setIsComplete] = useState(false);
    const [submitTest, {}] = useSendTestMutation()

    const navigate = useNavigate();

    useEffect(() => {
        if(grade) {
            setGradeState(grade)
        }
    }, [grade, setGradeState])

    const handleAnswerChange = (questionIndex: number, answer: string) => {
        setAnswers(prevAnswers => {
            const newAnswer = [...prevAnswers];
            newAnswer[questionIndex - 1] = { question: testData?.questions[questionIndex - 1].question || '', answer: answer };
            const allAnswered = newAnswer.every(answer => answer && answer.answer !== '');
            setIsComplete(allAnswered);
            return newAnswer;
        })
    }

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(testData) {
            const passedTestAnswers: ITestSubmit = {
                testId: testData?.id,
                questions: answers
            }

            await submitTest(passedTestAnswers);
            navigate(`/course/${gradeState}`);
        }
    }


    return (
        <form className="flex flex-col justify-center mt-9" onSubmit={handleSubmit}>
            <div className="flex justify-center">
                <h2 className="text-6xl font-bold text-dark_green">{testData?.sectionTitle}</h2>
            </div>
            <div className="absolute right-0 top-0">
                <img src="test-bg-1.png" alt="test-bg"/>
            </div>
            <div className="flex mt-[85px] flex-col items-start gap-6">
                {testData?.questions.map((question, index) => (
                  <TestQuestion answers={question.answers} index={index + 1} question={question.question} key={index}  onAnswerChange={handleAnswerChange}/>  
                ))}
            </div>
            <div className="flex justify-end">
                <button className="text-4xl py-5 px-10 border-4 border-dark_green border-r-0 rounded-l-[20px] my-10" type="submit" disabled={!isComplete}>Завершити</button>
            </div>
        </form>
    )
}

export default Test;