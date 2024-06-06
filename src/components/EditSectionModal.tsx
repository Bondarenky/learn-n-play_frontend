import { FC, useState } from "react";
import Modal from "./Modal"
import ModalInput from "./ModalInput";
import AddButton from "./AddButton";

interface Props {
    handleCloseModal: () => void;
    modalStatus: boolean;
    sectionTitle: string;
    sectionId: string;
    grade: number
}


const EditSectionModal: FC<Props> = ({ handleCloseModal, modalStatus, sectionTitle, sectionId, grade }) => {

    const [courseTitle, setCourseTitle] = useState('');

    const handleChanheCourseTitle = (e: any) => {
        setCourseTitle(e.target.value);
    }

    return (
        <Modal closeModal={handleCloseModal} modalStatus={modalStatus}>
            <div className="min-h-[650px] min-w-[700px] bg-white flex flex-col justify-center relative">
                <form className="px-[55px] z-50 flex flex-col items-end gap-[230px]">
                    <ModalInput initialValue={courseTitle} handleChange={handleChanheCourseTitle} name="title" placeholder={sectionTitle} disabled={true}/>
                    <AddButton path={`/add-test/${grade}/${sectionId}`}>Додати новий тест до розділу</AddButton>
                </form>
                <div className="absolute top-0 left-0">
                    <img src="first_bg-section-modal.png" alt="first_bg" />
                </div> 
                <div className="absolute bottom-0 right-0">
                    <img src="second-bg-section-modal.png" alt="second_bg" />
                </div> 
                <div className="absolute bottom-0 left-20">
                    <img src="dog.png" alt="dog" className="max-w-[75%]"/>
                </div>
            </div>
        </Modal>
    )
}

export default EditSectionModal;