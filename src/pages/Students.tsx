import { FC, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import StudentsList from "../components/StudentsList"
import { useGetUserQuery } from "../services/user.service";
import StudentAccordion from "../components/StudentAccordion";
import { useAppDispatch } from "../store/hooks";
import { logout } from "../store/user/userSlice";
import { removeTokenFromLocalStorage } from "../helpers/localstorage.helper";
import { useAuth } from "../hooks/useAuth";
import { useGetStudentsQuery } from "../services/students.service";

const Students: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isAuth = useAuth()
    const {data: loggedUser} = useGetUserQuery("", {
        skip: !isAuth
    });
    const [searchedEmail, setSearchedEmail] = useState("");
    const {data: getStudentsResponse} = useGetStudentsQuery(searchedEmail, {
        skip: searchedEmail === ""
    });

    useEffect(() => {
        if(loggedUser && loggedUser.role !== "TEACHER" && loggedUser.teacherEmail) {
            setSearchedEmail(loggedUser.teacherEmail)
        }
        if(loggedUser && loggedUser.role === "TEACHER") {
            setSearchedEmail(loggedUser.email)
        }
    }, [loggedUser, setSearchedEmail])

    const handleLogout = () => {
        dispatch(logout());
        removeTokenFromLocalStorage("accessToken")
        navigate("/")
    }

    return (
        <div className="relative w-full min-h-screen flex flex-col py-6">
            <header className="text-3xl container z-50 font-medium">
                <nav>
                    <ul className="flex justify-start gap-11">
                        <div className="flex-1 flex justify-start">
                            <li className="">
                                <NavLink to={"/"}>Головна</NavLink>
                            </li>
                        </div>
                        {loggedUser && loggedUser.role === "TEACHER" && (
                            <li>
                                <NavLink to={"/sign-up/student"}>Реєстрація учня</NavLink>
                            </li>
                        )}
                        <li>
                            <NavLink to={"/profile"}>Профіль</NavLink>
                        </li>
                        <li>
                            <button onClick={handleLogout}>Вихід</button>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className={`flex-1 flex justify-center items-start mt-12`}>
                <StudentsList title="Учні">
                    <div className="flex flex-col gap-12">
                        {Array.isArray(getStudentsResponse) ? getStudentsResponse.map(student => (
                            <StudentAccordion 
                                firstName={student.firstName}
                                lastName={student.lastName}
                                isTeacher={loggedUser?.role === "TEACHER"}
                                classesGrade={student.classesGrades}
                                studentId={student.studentId}
                                totalGrade={student.totalGrade}
                                key={student.studentId}
                                />
                        )) : []}
                    </div>
                </StudentsList>
            </div>
            <div className="absolute top-0 left-0 z-[-1]">
                <img src="students_bg.png" alt="students_bg"/>
            </div>
            <div className="absolute top-0 right-0 z-[-1]">
                <img src="students_bg_2.png" alt="students_bg"/>
            </div>
            <div className="absolute bottom-0 left-0 z-[-1]">
                <img src="students_bg_3.png" alt="students_bg"/>
            </div>
            <div className="absolute bottom-0 right-0 z-[-1]">
                <img src="bg_students_4.png" alt="students_bg"/>
            </div>
        </div>
    )
}

export default Students;