import { FC } from "react";

interface Props {
    title: string
    children: JSX.Element
}

const StudentsList: FC<Props> = ({title, children}) => {
    return (
        <div className="flex flex-col min-w-[1230px] max-h-[820px] bg-white border-4 border-dark_green">
            <div className="border-b-4 border-dark_green text-4xl flex justify-center font-medium">{title}</div>
            <div className="mt-12 overflow-auto">
                {children}
            </div>
        </div>
    )
}

export default StudentsList;