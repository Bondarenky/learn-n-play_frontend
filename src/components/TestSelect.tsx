import { FC } from "react"
import { Link } from "react-router-dom";
import { useGetUserQuery } from "../services/user.service";
import { useDeleteTestMutation } from "../services/classes.service";
import { toast } from "react-toastify";

interface Props {
    title: string;
    id: string;
    grade: number;
    percentage: number | null
}

const TestSelect: FC<Props> = ({title, id, grade, percentage}) => {
    const {data: loggedUser} = useGetUserQuery("");
    const [deleteTest] = useDeleteTestMutation();

    const handleDeleteTest = async() => {
        try {
            const response = await deleteTest(id).unwrap();
            if (response) {
                toast.success(response);
            }
        } catch (error) {
            toast.error("Failed to delete test");
        }
    }

    return (
        <li className="flex text-3xl text-dark_green font-medium">
            <div className="flex items-center gap-3.5 flex-1">
                <div className="w-4 h-4 bg-dark_green rounded-full"></div>
                <span>{title}</span>
            </div>
            <div className="flex items-center gap-8">
                {loggedUser && loggedUser.role !== "TEACHER" && (
                    <>
                        <Link to={`/test/${id}/${grade}`} className="text-2xl text-black px-12 border-2 border-dark_green rounded-20">Почати</Link>
                        {percentage !== null && (
                            <div className="w-12 h-12 bg-white rounded-full border-4 text-sm font-medium border-dark_green/65 text-black flex items-center justify-center">
                                {percentage}%
                            </div>
                        )}
                    </>
                )}  
                {loggedUser && loggedUser.role === "TEACHER" && (
                    <div className="flex">
                        <button onClick={handleDeleteTest}><img src="delete.png" alt="delete"/></button>
                    </div>
                )}
            </div>
        </li>
    )
}

export default TestSelect;