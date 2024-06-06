import { FC, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface Props {
    children: JSX.Element
}

export const ProtectedRoute: FC<Props> = ({children}) => {
    const isAuth = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        if(!isAuth) {
            navigate("/sign-in")
        }
    }, [isAuth])

    return (
        <>
            {isAuth && children}
        </>
    )
}

export default ProtectedRoute;