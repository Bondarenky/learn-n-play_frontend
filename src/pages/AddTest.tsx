import { useCallback, useEffect, useState } from "react";
import ModalInput from "../components/ModalInput";
import { useNavigate, useParams } from "react-router-dom";
import { ICreateTest } from "../types/types.interface";
import TestForm from "../components/TestForm";
import AddButton from "../components/AddButton";
import GreenButton from "../components/GreenButton";
import { useAddTestMutation } from "../services/classes.service";
import TestQuestion from "../components/TestQuestion";

const generateRandomKey = () => `${Date.now()}-${Math.random()}`;

const AddTest = () => {
    const [testName, setTestName] = useState("");
    const [currentTests, setCurrentTests] = useState<ICreateTest[]>([]);

    const navigate = useNavigate();

    const [showSubmitBtn, setShowSubmitBtn] = useState(false);
    const [plusBtnState, setPlusBtnState] = useState(false);

    const [question, setQuestion] = useState("");
    const [answers, setAnswers] = useState(["", "", "", ""]);

    const [correctAnswerId, setCorrectAnswerId] = useState<string | null>(null)
    const [addTest, {}] = useAddTestMutation();

    const { sectionId, grade } = useParams();

    const handleChangeTestName = useCallback((e: any) => {
        setTestName(e.target.value);
    }, []);

    const handleAddTest = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)      
        
        const correctAnswer = formData.get("correct_answer")!;

        const newTest = {
            question: formData.get("question") as string,
            answers: [
                formData.get("answer_1") as string,
                formData.get("answer_2") as string,
                formData.get("answer_3") as string,
                formData.get("answer_4") as string,
            ],
            correct_answer: answers[+correctAnswer - 1]
        }
        setCurrentTests(state => [...state, newTest] as ICreateTest[]);

        setQuestion("");
        setAnswers(["", "", "", ""]);
        setCorrectAnswerId(null);
    }

    const handleAddTestSubmit = async() => {
       if(sectionId) {
            await addTest(
                {
                    sectionId: sectionId,
                    title: testName,
                    tests: currentTests
                }
            )

            navigate(`/course/${grade}`)
       }
    }

    useEffect(() => {
        setShowSubmitBtn(currentTests.length >= 1 && testName !== "");
    }, [currentTests, testName]);

    useEffect(() => {
        setPlusBtnState(question === "" || answers.some(answer => answer === "") || correctAnswerId === null);
    }, [answers, question, correctAnswerId]);

    return (
        <div className="w-full min-h-screen relative">
            <form className="py-12 flex flex-col gap-12 items-start" onSubmit={handleAddTest}>
                <div className="container">
                    <ModalInput name="test_name" initialValue={testName} placeholder="Назва тесту" handleChange={handleChangeTestName}/> 
                </div>
                <div className="flex flex-col items-start gap-12">
                    {currentTests.map((test, index) => (
                        <TestQuestion answers={test.answers} index={index + 1} question={test.question} key={generateRandomKey()} disabled={true}/>
                    ))}
                </div>
                <div className="flex justify-start">
                    <TestForm 
                        type="text" 
                        question={question}
                        answers={answers}
                        setQuestion={setQuestion}
                        setAnswers={setAnswers}
                        correctAnswerId={correctAnswerId}
                        setCorrectAnswerId={setCorrectAnswerId}
                        key={0}
                        />
                </div>
                <div className="flex justify-end container">
                    <AddButton type="submit" disabled={plusBtnState}>Додати питання до курсу</AddButton>
                </div>
                {showSubmitBtn && (
                    <div className="mx-auto">
                        <GreenButton type="button" handleCLick={handleAddTestSubmit}>Створити тест</GreenButton>
                    </div>
                )}
            </form>

            <div className="absolute top-0 left-0 z-[-1]">
                <img src="add-test_bg_1.png" alt="add-test_bg"/>
            </div>
            <div className="absolute top-0 right-0 z-[-1]">
                <img src="add-test_bg_2.png" alt="add-test_bg"/>
            </div>
            <div className="absolute left-0 bottom-0 z-[-1]">
                <img src="add-test_bg_3.png" alt="add-test_bg"/>
            </div>
            <div className="absolute right-0 bottom-0 z-[-1]">
                <img src="add-test_bg_4.png" alt="add-test_bg"/>
            </div>
            <div className="absolute top-16 right-16 z-[-1]">
                <img src="cat.png" alt="add-test_cat"/>
                <img src="cursor.png" alt="add-test_cat" className="absolute bottom-0" />
            </div>
        </div>
    )
}

export default AddTest;