import { FC } from "react";
import GreenButton from "../components/GreenButton";
import { useNavigate } from "react-router-dom";

const Error: FC = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    }

    return (
    <div className="w-full min-h-screen flex justify-center items-center">
        <div className="flex flex-col gap-5 items-center">
            <h1 className="text-9xl font-bold text-dark_green">404</h1>
            <p className="text-3xl">Сторінка не знайдена!</p>
            <GreenButton handleCLick={goHome}>На головну</GreenButton>
        </div>
         <div className="absolute bottom-0 left-0">
            <img src="classes-bg.png" alt="courses-bg" className="max-h-[300px]"/>
        </div>
        <div className="absolute bottom-[100px] right-0">
            <img src="classes-hero-bg.png" alt="courses-hero-bg" />
            <img src="cool-kids-sitting.png" alt="courses-hero" className="absolute bottom-[-65px] right-12"/>
        </div>
    </div>
    )
}

export default Error