import { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useAppDispatch } from "../store/hooks";
import { logout } from "../store/user/userSlice";
import { removeTokenFromLocalStorage } from "../helpers/localstorage.helper";

interface Props {
    anotherStyles?: boolean
}

const Navbar: FC<Props> = ({anotherStyles = false }) => {

    const isAuth = useAuth();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        removeTokenFromLocalStorage("accessToken");
        navigate("/");
    };

    return (
        <div className={`flex gap-x-12 text-3xl z-40 font-medium pl-9 pr-12 ${anotherStyles ? 'bg-white py-5 rounded-l-20 border-4 border-dark_green border-r-0' : ''}`}>
            <NavLink to={'/'}>Головна</NavLink>
            <NavLink to={'/courses'}>Курси</NavLink>
            
            {!isAuth  && (
                <>
                    <NavLink to={"/sign-up/teacher"}>Реєстрація</NavLink>
                    <NavLink to={"/sign-in"}>Вхід</NavLink>
                </>
            )}
            {isAuth && (
                <>
                    <NavLink to={"/profile"}>Профіль</NavLink>
                    <button onClick={handleLogout}>Вихід</button>
                </>
            )}
        </div>
    )
}

export default Navbar;