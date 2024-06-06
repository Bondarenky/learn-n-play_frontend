import { FC } from "react";
import Logo from "./Logo";
import Navbar from "./Navbar";

interface Props {
    anotherHeader?: boolean
}

const Header: FC<Props> = ({ anotherHeader = false }) => {
    return (
        <>
            <header className={`flex justify-between items-center z-50 relative`}>
                <Logo anotherStyles={anotherHeader}/>
                <Navbar anotherStyles={anotherHeader}/>
            </header>
        </>
    )
}

export default Header;