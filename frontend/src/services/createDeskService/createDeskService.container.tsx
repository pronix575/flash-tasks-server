import { useEvent, useStore } from "effector-react";
import { useNetworkErrors } from "../../hooks/useNetworkErrors";
import { CreateDeskModal } from "./components/CreateDeskModal";
import { createDeskService } from "./createDeskService.models";

export const CreateDeskContainer = () => {
  const show = useStore(createDeskService.outputs.$modalIsOpen);
  const handleClosingModal = useEvent(createDeskService.inputs.closeModal);
  const createDeskFailed = createDeskService.outputs.createDeskFailed;

  useNetworkErrors(createDeskFailed);

  return (
    <CreateDeskModal
      show={show}
      handleClosingModal={handleClosingModal}
    ></CreateDeskModal>
  );
};
