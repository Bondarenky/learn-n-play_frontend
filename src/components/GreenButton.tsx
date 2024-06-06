import { FC, ReactNode } from "react"

interface Props {
    children: ReactNode;
    handleCLick?: (e: any) => void;
    type?: "submit" | "button";
    styles?:string
}

const GreenButton: FC<Props> = ({ children, handleCLick, type, styles = "rounded-20"}) => {
    return <button onClick={handleCLick} className={`bg-dark_green text-2xl text-white w-full py-3 px-12 max-w-[556px] ${styles}`} type={type}>{children}</button>
}

export default GreenButton;