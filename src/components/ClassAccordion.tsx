import { FC, useState } from "react";
import { IThemesGrades } from "../types";

interface Props {
    grade: number;
    gradePercent: number;
    themesGrade: IThemesGrades[];
}

const ClassAccordion: FC<Props> = ({grade, gradePercent, themesGrade}) => {
    const [active, setActive] = useState(false);

    const handleActive = () => {
        setActive(state => !state);
    }

    return (
        <>
            <div className="container relative flex flex-col gap-2.5">
                <div className="flex justify-between max-w-[875px]">
                    <button className="flex gap-5 items-center" onClick={handleActive}>
                        <img src="arrow.png" alt="arrow" />
                        <span className="text-3xl font-medium text-dark_green">{grade} клас</span>
                    </button>
                    <div className="w-[50px] h-[50px] bg-white rounded-full border-4 text-sm font-medium border-dark_green/65 text-dark_green/65 flex items-center justify-center">
                        {gradePercent.toFixed(0)}%
                    </div>
                </div>
                <div className={!active ? "hidden" : 'block'}>
                    <ul className="flex flex-col gap-3.5 ml-[100px]">
                        {themesGrade.map(theme => (
                            <li className="text-xl text-dark_green" key={theme.themeId}>
                                <div className="flex max-w-[422px] justify-between items-center">
                                    <span className="block">{theme.themeTitle}</span>
                                    <div className="w-[40px] h-[40px] bg-white rounded-full border-2 text-xs font-medium border-dark_green text-dark_green flex items-center justify-center">
                                        {theme.themeGrade.toFixed(0)}%
                                    </div>
                                </div>
                                <div className="pr-20 mt-3">
                                    <div className={`w-full max-w-[422px] h-[2px] bg-dark_green`}></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default ClassAccordion;