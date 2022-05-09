import { useStore } from "effector-react";
import { CreateDeskModal } from "./components/CreateDeskModal"
import { createDeskService } from "./createDeskService.modals"

export const CreateDeskContainer = () => {
    const show = useStore(createDeskService.outputs.$modalIsOpen)
    const handleClosingModal = createDeskService.inputs.closeModal;

    return <CreateDeskModal show={show} handleClosingModal={handleClosingModal}  ></CreateDeskModal>
}