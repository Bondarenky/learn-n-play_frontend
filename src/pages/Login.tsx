import { FC, useState } from "react";
import Input from "../components/Input";
import Logo from "../components/Logo";
import GreenButton from "../components/GreenButton";
import LinkButton from "../components/LinkButton";
import { useNavigate } from "react-router-dom";
import { AuthService } from "../services/auth.service";
import { setTokenToLocalStorage } from "../helpers/localstorage.helper";
import { useAppDispatch } from "../store/hooks";
import { login } from "../store/user/userSlice";
import { toast } from "react-toastify";

const Login: FC = () => {
    const [inputValues, setInputValues] = useState({
        email: '',
        password: '',
    });

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };

    const handleLoginSubmit = async(e: React.FormEvent<HTMLInputElement>) => {
        try {
            e.preventDefault();
            const data = await AuthService.login({
                email: inputValues.email,
                password: inputValues.password
            })

            if(data) {
                setTokenToLocalStorage('accessToken', data.accessToken)
                dispatch(login(data));
                toast.success("You have been login");
                navigate("/")
            }
        } catch (e: any) {
            const error = e.response?.data.message
            toast.error(error.toString());
        }
    }

    const handleShowRegister = () => {
        navigate("/sign-up/teacher");
    }

    const handleHome = () => {
        navigate("/")
    }

    return (
        <div className="absolute top-0 left-0 bg-white flex justify-center items-center w-full h-full">
            <div className="py-4 px-14 bg-white relative flex flex-col  gap-3">
                <div className="flex gap-9 items-center">
                    <Logo styles="ml-0"/>
                    <div className="text-dark_green font-medium text-4xl mr-4">
                        Вхід користувача
                    </div>
                </div>
                <div className="w-full">
                    <form className="flex flex-col gap-2">
                        <Input type="email" errorMessage={""} placeholder="Адреса електроної пошти" name="email" initialValue={inputValues.email} handleChange={handleChange}/>
                        <Input type="password" errorMessage={""} placeholder="Пароль" name="password" initialValue={inputValues.password} handleChange={handleChange}/>
                    </form>
                </div>
                <div className="w-full flex flex-col items-center gap-4 px-4">
                    <GreenButton handleCLick={handleLoginSubmit}>Вхід</GreenButton>
                    <LinkButton handleClick={handleShowRegister}>Зареєструватись</LinkButton>
                </div>
            </div>
            <div className="absolute top-12 left-0">
                <GreenButton handleCLick={handleHome} styles="rounded-l-0 rounded-r-20">На головну</GreenButton>
            </div>
        </div>
    )
}

export default Login