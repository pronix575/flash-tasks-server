import { FC } from "react";
import { Modal } from "../../../../shared/components/Modal";
import { CreateDeskFormContainer } from "../../CreateDeskFormService/CreateDeskForm.container";
import { CreateDeskModalProps } from "./CreateDeskModal.types";

export const CreateDeskModal: FC<CreateDeskModalProps> = ({show, handleClosingModal}) => {

  return (
    <Modal
      show={show}
      title={"Create new desk"}
      onHide={handleClosingModal}
    >
      <CreateDeskFormContainer/>
    </Modal>
  );
};
