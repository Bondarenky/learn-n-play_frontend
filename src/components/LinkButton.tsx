import { FC, ReactNode } from "react"

interface Props {
    children: ReactNode;
    handleClick?: () => void
}

const LinkButton: FC<Props> = ({children, handleClick}) => {
    return <div className="flex justify-start">
        <button className="text-xl underlined" onClick={handleClick}>
            {children}
        </button>
    </div>
}

export default LinkButton;