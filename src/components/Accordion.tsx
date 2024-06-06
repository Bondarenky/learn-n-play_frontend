import { FC, useState } from "react";
import EditSectionModal from "./EditSectionModal";
import { useGetUserQuery } from "../services/user.service";
import TestSelect from "./TestSelect";
import { useDeleteSectionMutation } from "../services/classes.service";
import { toast } from "react-toastify";

interface Props {
    sectionId: string;
    title: string;
    tests: any[];
    grade: number;
    sectionPercentage: number | null;
}

const Accordion: FC<Props> = ({title, tests, sectionId, grade, sectionPercentage}) => {
    const [active, setActive] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    
    const {data: loggedUser} = useGetUserQuery("");
    const [deleteSection] = useDeleteSectionMutation();

    const handleActive = () => {
        setActive(state => !state);
    }

    const handleShowEditModal = () => {
        setShowEditModal(state => !state);
    }

    const handleSectionDelete = async() => {
        try {
            const response = await deleteSection(sectionId).unwrap();
            if (response) {
                toast.success(response);
            }
        } catch (error) {
            toast.error("Failed to delete section");
        }
    }

    return (
        <>
            <div className="relative flex flex-col gap-2.5 max-w-[65%]">
                <div className="flex justify-between">
                    {tests.length !== 0 && (
                        <button className="flex gap-5 items-center px-12" onClick={handleActive}>
                            <img src="arrow.png" alt="arrow" />
                            <span className="text-4xl font-medium text-dark_green">{title}</span>
                        </button>
                    )}
                    {tests.length === 0 && (
                        <div className="px-12 flex gap-5 items-center">
                            <div className="block w-[25px] h-auto"></div>
                            <span className="text-4xl font-medium text-dark_green">{title}</span>
                        </div>
                    )}
                    {loggedUser && sectionPercentage !== null && loggedUser.role !== "TEACHER" && (
                        <div className="w-[75px] h-[75px] bg-white rounded-full border-4 text-2xl font-medium text-dark_green/65 flex items-center justify-center border-dark_green/65">
                            {sectionPercentage.toFixed(0)}%
                        </div>
                    )}
                    {loggedUser?.role === "TEACHER" && (
                        <div className="flex">
                            <button onClick={handleShowEditModal}><img src="pen.png" alt="edit"/></button>
                            <button onClick={handleSectionDelete}><img src="delete.png" alt="delete"/></button>
                        </div>
                    )}
                </div>
                <div className={!active ? "hidden" : 'block'}>
                    <ul className="flex flex-col gap-3.5 pl-40 pr-20">
                        {tests.map(test => (
                            <TestSelect title={test.title} id={test.id} key={test.id} grade={grade} percentage={test.percentage}/>
                        ))}
                    </ul>
                </div>
                 <div className={`w-full h-[2px] bg-dark_green`}></div>
            </div>
            {showEditModal && (
                <EditSectionModal handleCloseModal={handleShowEditModal} modalStatus={showEditModal} sectionTitle={title} sectionId={sectionId} grade={grade}/>
            )}
        </>
    )
}

export default Accordion;