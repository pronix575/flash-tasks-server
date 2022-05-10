import { useEvent } from "effector-react";
import { createDeskService } from "../createDeskService/createDeskService.models";
import { DashboardPage } from "./components/DashboardPage";

export const DashboardPageContainer = () => {
  const handleOpeningModal = useEvent(createDeskService.inputs.openModal);

  return (
    <DashboardPage
      handleOpeningModal={handleOpeningModal}
    />
  );
};
