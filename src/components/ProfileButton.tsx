import { FC, ReactNode } from "react"
import { Link } from "react-router-dom";

interface Props {
    children: ReactNode;
    handleClick?: () => void
    isLink?: boolean
    path?: string;
}

const ProfileButton: FC<Props> = ({children, handleClick, isLink = false, path = "/"}) => {
    return (
        <>
            {!isLink && (
                <button className="px-11 py-2 border-4 border-dark_green rounded-[20px] text-3xl font-medium bg-white" onClick={handleClick}>{children}</button>
            )}
            {isLink && (
                <Link to={path} className="px-11 py-2 border-4 border-dark_green rounded-[20px] text-3xl font-medium bg-white" onClick={handleClick}>{children}</Link>
            )}
        </>
    )
}

export default ProfileButton