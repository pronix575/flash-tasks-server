import { useStore } from "effector-react";
import { createDeskService } from "../createDeskService/createDeskService.modals";
import { DashboardPage } from "./components/DashboardPage";

export const DashboardPageContainer = () => {
  const handleOpeningModal = createDeskService.inputs.openModal;
  const handleClosingModal = createDeskService.inputs.closeModal;
  const modalIsOpen = useStore(createDeskService.outputs.$modalIsOpen);

  return (
    <DashboardPage
      handleOpeningModal={handleOpeningModal}
    />
  );
};
