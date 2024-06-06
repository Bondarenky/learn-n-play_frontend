import { NavLink, useNavigate } from "react-router-dom";
import ProfileList from "../components/ProfileList";
import PassedCourse from "../components/PassedCourse";
import ProfileButton from "../components/ProfileButton";
import { useEffect, useState } from "react";
import { useGetMySectionsQuery, useGetUserQuery } from "../services/user.service";
import { useAppDispatch } from "../store/hooks";
import { logout } from "../store/user/userSlice";
import { removeTokenFromLocalStorage } from "../helpers/localstorage.helper";

const Profile = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const {data: loggedUser, refetch: refetchingUserData} = useGetUserQuery("");
    const {data: mySections} = useGetMySectionsQuery(loggedUser?.email || "", {
        skip: !loggedUser?.email
    });
    const {data: teacherSections} = useGetMySectionsQuery(loggedUser?.teacherEmail || "", {
        skip: !loggedUser?.teacherEmail
    })
    
    useEffect(() => {
        refetchingUserData();
    }, [])
    
    
    const isTeacher = loggedUser ? loggedUser.role === "TEACHER" : false
    const [showTeacherProfile, setShowTeacherProfile] = useState(isTeacher);

    useEffect(() => {
        setShowTeacherProfile(isTeacher)
        
    }, [setShowTeacherProfile, isTeacher])

    const handleShowTeacherProfile = () => {
        setShowTeacherProfile(state => !state);
    }

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
                        {showTeacherProfile && !isTeacher && (
                            <li>
                                <button onClick={handleShowTeacherProfile}>Мій профіль</button>
                            </li>
                        )}
                        <li>
                            <button onClick={handleLogout}>Вихід</button>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="flex items-center justify-between container flex-1">
                <div className="flex flex-col items-center gap-12">
                    <div className="flex justify-center flex-1">
                        <img src="student-logo.png" alt="student-logo" className="max-w-[75%] bg-white rounded-full"/>
                    </div>
                    <div>
                        {!showTeacherProfile && (
                            <ProfileButton handleClick={handleShowTeacherProfile}>Профіль викладача</ProfileButton>
                        )}
                        {showTeacherProfile && (
                            <ProfileButton isLink={true} path="/students">Список учнів</ProfileButton>
                        )}
                    </div>
                </div>
                <div className="flex flex-col gap-12">
                    <div className="w-[350px] bg-dark_green rounded-20 px-9 py-1.5 text-3xl font-medium text-white">
                        {loggedUser && !showTeacherProfile && loggedUser.firstName}
                        {loggedUser && loggedUser.role === "STUDENT" && showTeacherProfile && loggedUser.teacherFirstName}
                        {loggedUser && loggedUser.role === "TEACHER" && loggedUser.firstName}
                    </div>
                    <div className="w-[350px] bg-dark_green rounded-20 px-9 py-1.5 text-3xl font-medium text-white">
                        {loggedUser && !showTeacherProfile && loggedUser.lastName}
                        {loggedUser && loggedUser.role === "STUDENT" && showTeacherProfile && loggedUser.teacherLastName}
                        {loggedUser && loggedUser.role === "TEACHER" && loggedUser.lastName}
                    </div>
                    <div className="w-[350px] bg-dark_green rounded-20 px-9 py-1.5 text-3xl font-medium text-white overflow-auto profile-input">
                        {loggedUser && !showTeacherProfile && loggedUser.email}
                        {loggedUser && loggedUser.role === "STUDENT" && showTeacherProfile && loggedUser.teacherEmail}
                        {loggedUser && loggedUser.role === "TEACHER" && loggedUser.email}
                    </div>
                </div>
                {!showTeacherProfile && (
                    <ProfileList title="Пройдені курси">
                        <div className="flex flex-col gap-12 mt-12">
                            {mySections && mySections.map(mySection => (
                                <PassedCourse title={mySection.title} progress={mySection.percentage || 0} key={mySection.id}/>
                            ))}
                        </div>
                    </ProfileList>
                )}
                {showTeacherProfile && (
                    <ProfileList title="Мої курси">
                        <div className="flex flex-col gap-12 mt-12">
                            {!loggedUser?.teacherEmail && mySections && mySections.map(mySection => (
                                <PassedCourse title={mySection.title} key={mySection.id}/>
                            ))}
                            {loggedUser?.teacherEmail && teacherSections && teacherSections.map(section => (
                                <PassedCourse title={section.title} key={section.id}/>
                            ))}
                        </div>
                    </ProfileList>
                )}
            </div>
            <div className="absolute top-0 left-0 z-[-1]">
                <img src="profile_bg_1.png" alt="profile_bg" />
            </div>
            <div className="absolute bottom-0 left-0 z-[-1]">
                <img src="profile_bg_2.png" alt="profile_bg" />
            </div>
            <div className="absolute bottom-0 right-0 z-[-1]">
                <img src="profile_bg_3.png" alt="profile_bg" />
            </div>
            <div className="absolute center z-[-1]">
                <img src="profile_bg_4.png" alt="profile_bg" />
            </div>
        </div>
    )
}

export default Profile;