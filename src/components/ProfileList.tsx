import { FC } from "react"

interface Props {
    title: string;
    children: JSX.Element;
}

const ProfileList: FC<Props> = ({ title, children }) => {
    return (
        <div className="flex flex-col min-w-[430px] border-4 border-dark_green bg-white">
            <div className="p-5 border-b-4 border-dark_green text-3xl font-medium">{title}</div>
            <div className="flex flex-col max-h-[450px] overflow-auto">
                {children}
            </div>
        </div>
    )
}

export default ProfileList;