import { FC, useEffect } from "react";
import CourseButton from "../components/CourseButton";
import Header from "../components/Header";
import { useGetUserQuery } from "../services/user.service";
import { useAuth } from "../hooks/useAuth";

const Courses: FC = () => {
    const isAuth = useAuth();
    const { data: user, refetch: refetchingUserData} = useGetUserQuery("", {
        skip: !isAuth,
    });

    useEffect(() => {
        if(isAuth) {
            refetchingUserData();
        }
    }, [isAuth, refetchingUserData])

    return (
        <>
            {user && (
                <>
                    <Header />
                    <div className="relative flex flex-1 flex-col justify-center h-full">
                        <div className="absolute bottom-0 left-0">
                            <img src="classes-bg.png" alt="courses-bg" className="max-h-[300px]"/>
                        </div>
                        <div className="absolute bottom-[100px] right-0">
                            <img src="classes-hero-bg.png" alt="courses-hero-bg" />
                            <img src="cool-kids-sitting.png" alt="courses-hero" className="absolute bottom-[-65px] right-12"/>
                        </div>
                        <div className="container z-30 grid grid-cols-3 gap-9 justify-items-center">
                            <CourseButton id={6} grade={user ? user.grade : 0} key={6}>6 клас</CourseButton>
                            <CourseButton id={7} grade={user ? user.grade : 0} key={7}>7 клас</CourseButton>
                            <CourseButton id={8} grade={user ? user.grade : 0} key={8}>8 клас</CourseButton>
                            <div className="col-span-3 grid grid-cols-2 gap-9">
                                <CourseButton id={9} grade={user ? user.grade : 0} key={9}>9 клас</CourseButton>
                                <CourseButton id={10} grade={user ? user.grade : 0} key={10}>10 клас</CourseButton>
                            </div>
                            <div className="col-span-3 grid grid-cols-1">
                                <CourseButton id={11} grade={user ? user.grade : 0} key={11}>11 клас</CourseButton>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Courses;