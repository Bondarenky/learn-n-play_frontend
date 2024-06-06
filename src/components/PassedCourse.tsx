import { FC } from "react"

interface Props {
    title: string;
    progress?: number;
}

const PassedCourse: FC<Props> = ({title, progress}) => {
    return (
        <div>
            <div className="flex justify-between font-medium text-dark_green/65 items-center px-5">
                <div className="text-3xl">
                    {title}
                </div>
                {progress && (
                    <div className="w-[65px] h-[65px] border-4 border-dark_green/65 rounded-full bg-white flex justify-center items-center text-xl">
                        {progress.toFixed(0)}%
                    </div>
                )}
            </div>
            <div className="w-full h-[2px] bg-dark_green/65 mt-2"></div>
        </div>
    )
}

export default PassedCourse;