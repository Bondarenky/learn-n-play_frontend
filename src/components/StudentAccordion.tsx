import { FC, useState } from "react";
import ClassAccordion from "./ClassAccordion";
import { IClassesGrade } from "../types";
import { useDeleteStudentMutation } from "../services/students.service";
import { toast } from "react-toastify";

interface Props {
    isTeacher: boolean;
    firstName: string;
    lastName: string;
    totalGrade: number;
    studentId: string;
    classesGrade: IClassesGrade[];
}

const StudentAccordion: FC<Props> = ({isTeacher = false, firstName, lastName, totalGrade, studentId, classesGrade}) => {
    const [active, setActive] = useState(false);
    const [deleteStudent] = useDeleteStudentMutation()

    const handleActive = () => {
        setActive(state => !state);
    }

    const handleDeleteUser = async() => {
        try {
            const response = await deleteStudent(studentId).unwrap();
            if (response) {
                toast.success(response);
            }
        } catch (error) {
            toast.error("Failed to delete section");
        }
    }

    return (
        <div className="container relative flex flex-col gap-2.5">
            <div className="flex justify-between pl-6 pr-20">
                {classesGrade.length !== 0 && (
                    <button className="flex gap-5 items-center flex-1" onClick={handleActive}>
                        <img src="arrow.png" alt="arrow" />
                        <span className="text-4xl font-medium text-dark_green">{firstName} {lastName}</span>
                    </button>
                )}
                {classesGrade.length === 0 && (
                    <div className="px-12 flex gap-5 items-center flex-1">
                        <div className="block w-[25px] h-auto"></div>
                        <span className="text-4xl font-medium text-dark_green">{firstName} {lastName}</span>
                    </div>
                )}
                <div className="w-[75px] h-[75px] bg-white rounded-full border-4 text-lg font-medium border-dark_green/65 text-dark_green/65 flex items-center justify-center">
                    {totalGrade && `${totalGrade.toFixed(0)}%`}
                    {!totalGrade && "-"}
                </div>
                {isTeacher && (
                    <div className="flex">
                        <button onClick={handleDeleteUser}><img src="delete.png" alt="delete"/></button>
                    </div>
                )}
            </div>
            <div className="pr-20">
                <div className={`w-full h-[2px] bg-dark_green`}></div>
            </div>
            <div className={`pl-12 ${!active ? "hidden" : 'block'}`}>
                <ul className="list-disc flex flex-col gap-3.5 pb-3.5">
                    {classesGrade.map((studentClass, index) => (
                        <ClassAccordion key={index} grade={studentClass.grade} gradePercent={studentClass.classGrade} themesGrade={studentClass.themesGrades}/>
                    ))}
                </ul>
            </div>
        </div> 
    )
}

export default StudentAccordion