import { FC, ReactNode } from "react"
import { Link } from "react-router-dom";

interface Props {
    children: ReactNode;
    type?: "submit" | "reset" | 'button'
    handleClick?: (e: any) => void;
    path?: string;
    disabled?: boolean
}

const AddButton: FC<Props> = ({ children, type, handleClick, path, disabled}) => {
    return (
        <>
            <div className="flex items-center gap-5">
                <div className="text-3xl font-medium max-w-[275px] text-right">
                    {children}
                </div>
                {!path && (
                    <button type={type} className={`w-[90px] h-[90px] ${disabled ? "bg-dark_black/35" : "bg-dark_green"} rounded-full flex justify-center items-center relative`} onClick={handleClick} disabled={disabled}>
                        <div className="w-[6px] h-[65px] bg-white"></div>
                        <div className="w-[65px] h-[6px] bg-white absolute center"></div>
                    </button>
                )}
                {path && (
                    <Link to={path} className={`w-[90px] h-[90px] ${disabled ? "bg-dark_black/35" : "bg-dark_green"} rounded-full flex justify-center items-center relative`}>
                        <div className="w-[6px] h-[65px] bg-white"></div>
                        <div className="w-[65px] h-[6px] bg-white absolute center"></div>
                    </Link>
                )}
            </div>
        </>
    )
}

export default AddButton