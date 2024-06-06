import { FC, useState } from "react";
import Header from "../components/Header";
import Accordion from "../components/Accordion";
import AddSectionModal from "../components/AddSectionModal";
import { useParams } from "react-router-dom";
import { useGetClassQuery } from "../services/classes.service";
import { useGetUserQuery } from "../services/user.service";

const Course: FC = () => {
    const { grade } = useParams();
    const numericGrade = grade ? parseInt(grade) : undefined;

    const [showSectionModal, setShowSectionModal] = useState(false);
    const {data: gradeData} = useGetClassQuery(numericGrade ?? 6, {
        skip: !grade
    });
    
    const {data: loggedUser} = useGetUserQuery("");
    
    const handleShowSectionModal = () => {
        setShowSectionModal(state => !state);
    }

    return (
        <>
            {loggedUser && (
                <>
                    <div className="font-montserrat">
                    <Header anotherHeader={true} />
                    <div className="absolute min-h-[1024px] top-0 left-0 w-full">
                        <div 
                            style={{
                                backgroundImage: "url('course-header-bg.png')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }} 
                            className="w-full min-h-[270px] relative flex items-end mb-[42px]">
                            <div className={`w-full flex justify-between items-center ${loggedUser.role === "TEACHER" ? "translate-y-[84px]" : "translate-y-[42px]"}`}>
                                <div className="text-3xl bg-white py-5 border-4 border-dark_green px-12 rounded-r-20 border-l-0 font-medium pr-96">
                                    Математика {gradeData?.grade} клас 
                                </div>
                                {loggedUser.role === "TEACHER" && (
                                    <div className="text-3xl relative font-medium flex flex-col items-center">
                                        <div className="border-dark_green pl-6 pr-64 rounded-l-20 border-r-0 bg-white py-5 border-4">
                                            Вчитель: {loggedUser.firstName} {loggedUser.lastName}
                                        </div>
                                        <div className="border-dark_green px-6 rounded-b-[20px] bg-white py-5 border-4 border-t-0">
                                            <button onClick={handleShowSectionModal}>Додати розділ</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="mt-24 flex flex-col gap-7">
                            {grade && gradeData?.sections.map(item => 
                                <Accordion key={item.id} title={item.title} tests={item.tests} sectionId={item.id} grade={gradeData.grade} sectionPercentage={item.percentage}/>
                            )}
                            <div className="absolute bottom-12 right-0">
                                <img src="course-hero-bg.png" alt="course-hero-bg max-w-[50%]" />
                                <img src="course-hero.png" alt="course-hero" className="absolute bottom-0 max-w-[75%]"/>
                            </div>
                        </div>
                    </div>
                </div>
                {showSectionModal && gradeData?.id !== undefined && (
                    <AddSectionModal handleCloseModal={handleShowSectionModal} modalStatus={showSectionModal} grade={gradeData.grade}/>
                )}
            </>
        )}
        </>
    )
}

export default Course;