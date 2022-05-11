import { useStore } from "effector-react";
import { DesksList } from "./components/DesksList";
import { desksListService } from "./desksListService.models";

export const DesksListContainer = () => {
  const desksList = useStore(desksListService.outputs.$desksList);

  return <DesksList desksList={desksList}/>;
};
