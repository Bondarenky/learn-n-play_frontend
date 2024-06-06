import { FC } from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";

const Home: FC = () => {
    return (
        <>
            <Header />
            <div className="container relative flex-1 h-full flex flex-col justify-center">
                <div>
                    <div className="absolute max-w-[900px] z-30 mt-9">
                        <div className="text-8xl font-bold">Розпочни легко вчитись<br></br> з нами!</div>
                        <span className="text-4xl mt-7 block">Математика доступна всім</span>
                    </div>
                    <Hero />
                </div>
            </div>
        </>
    )
}

export default Home;