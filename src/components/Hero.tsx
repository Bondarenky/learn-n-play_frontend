import { FC } from "react";

const Hero: FC = () => {
    return <div>
        <div className="flex justify-end relative">
            <div className="relative">
                <img src="Vector.png" alt="bg-hero" className="max-h-[550px] w-[850px]"/>
                <img src="cool-kids-study.png" alt="hero" className="absolute max-h-[400px] bottom-6 center-x"/>
            </div>
        </div>
    </div>
}

export default Hero;