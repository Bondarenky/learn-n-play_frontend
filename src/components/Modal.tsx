import { FC, MouseEvent as ReactMouseEvent, useEffect } from "react"

interface Props {
    children: JSX.Element;
    closeModal: () => void;
    modalStatus: boolean
}

const Modal: FC<Props> = ({children, closeModal, modalStatus = false}) => {

    const handleStopCloseModal = (e: ReactMouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    }

    useEffect(() => {
        if (modalStatus) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [modalStatus]);

    return (
        <div className="fixed w-full h-full bg-black/50 z-50 flex items-center justify-center top-0" onClick={closeModal}>
            <div onClick={handleStopCloseModal} className="overflow-auto">
                {children}
            </div>
        </div>
    )
}

export default Modal