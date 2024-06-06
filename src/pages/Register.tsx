import React, { FC, useState } from "react";
import Input from "../components/Input";
import GreenButton from "../components/GreenButton";
import LinkButton from "../components/LinkButton";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../components/Logo";
import { AuthService } from "../services/auth.service";
import { toast } from "react-toastify";
import { useCreateStudentMutation } from "../services/students.service";

const Register: FC = () => {
    const {user} = useParams();
    const [registerStudent] = useCreateStudentMutation();
    const [inputValues, setInputValues] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };

    const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            if (user === "teacher") {
                const data = await AuthService.registration({
                    firstName: inputValues.firstname,
                    lastName: inputValues.lastname,
                    email: inputValues.email,
                    password: inputValues.password,
                    confirmPassword: inputValues.confirmPassword
                });

                if (data) {
                    toast.success(data.toString());
                    navigate("/sign-in");
                }
            } else if (user === "student") {
                const data = await registerStudent({
                    firstName: inputValues.firstname,
                    lastName: inputValues.lastname,
                    email: inputValues.email,
                    password: inputValues.password,
                    confirmPassword: inputValues.confirmPassword
                }).unwrap();

                if (data) {
                    toast.success(`Student ${inputValues.firstname} has been created!`);
                    navigate("/students");
                }
            }
        } catch (e: any) {
            const error = e.response?.data.message || "An error occurred";
            toast.error(error.toString());
        }
    };

    const handleShowLogin = () => {
        navigate("/sign-in");
    }

    const handleHome_Back = () => {
        if(user === "student") {
            navigate("/students")
        }
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
                        <Input type="text" errorMessage={""} placeholder="Ім’я" name="firstname" initialValue={inputValues.firstname} handleChange={handleChange} required={true}/>
                        <Input type="text" errorMessage={""} placeholder="Прізвище" name="lastname" initialValue={inputValues.lastname} handleChange={handleChange} required={true}/>
                        <Input type="email" errorMessage={""} placeholder="Адреса електроної пошти" name="email" initialValue={inputValues.email} handleChange={handleChange} required={true}/>
                        <Input type="password" errorMessage={""} placeholder="Пароль" name="password" initialValue={inputValues.password} handleChange={handleChange} required={true}/>
                        <Input type="password" errorMessage={""} placeholder="Повторіть пароль" name="confirmPassword" initialValue={inputValues.confirmPassword} handleChange={handleChange} required={true}/>
                    </form>
                </div>
                <div className="w-full flex flex-col items-center gap-4 px-1">
                    <GreenButton handleCLick={handleRegisterSubmit}>{user === "teacher" ? "Зареєструватись" : "Зареєструвати"}</GreenButton>
                    {user === "teacher" && (
                        <LinkButton handleClick={handleShowLogin}>Вхід</LinkButton>
                    )}
                </div>
            </div>
            <div className="absolute top-12 left-0">
                <GreenButton handleCLick={handleHome_Back} styles="rounded-l-0 rounded-r-20">{user === "student" ? "Повернутись назад" : "На головну"}</GreenButton>
            </div>
        </div>
    )
}

export default Register