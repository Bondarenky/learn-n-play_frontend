import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
    id: number;
    children: ReactNode,
    imageOffset?: string,
    grade: number | null,
}

const CourseButton: FC<Props> = ({children, imageOffset = 0, grade, id}) => {
    let available = false;
    
    if(grade) {
        available = grade >= id;
    }

    return (
        <>
            {available && (
                <Link to={`/course/${id}`} className="min-w-[384px] rounded-[20px] overflow-hidden flex flex-col justify-start min-h-[140px] bg-light_green/65 cursor-pointer">
                    <div className="relative w-full min-h-[90px] overflow-hidden rounded-[20px]">
                        <img src="class-btn-bg.png" alt="bg-image" className={`absolute left-0 w-full top-[-${imageOffset}%]`}/>
                    </div>
                    <div className="font-bold text-white text-4xl flex-1 flex items-center ml-6">
                        {children}
                    </div>
                </Link>
            )}
            {!available && (
                <div className="min-w-[384px] rounded-[20px] overflow-hidden flex flex-col justify-start min-h-[140px] bg-disactive_green/65">
                    <div className="relative w-full min-h-[90px] overflow-hidden rounded-[20px]">
                        <img src="class-btn-bg.png" alt="bg-image" className={`absolute left-0 w-full top-[-${imageOffset}%]`}/>
                        <div className="bg-disactive_green/35 absolute top-0 left-0 w-full h-full"/>
                        <div className="absolute center max-w-20 h-auto">
                            <img src="lock.png" alt="banned" />
                        </div>
                    </div>
                    <div className="font-bold text-white text-4xl flex-1 flex items-center ml-6">
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}

export default CourseButton;