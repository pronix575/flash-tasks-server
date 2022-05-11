import { useStore } from "effector-react";
import { useNavigate } from "react-router-dom";
import { DesksList } from "./components/DesksList";
import { desksListService } from "./desksListService.models";

export const DesksListContainer = () => {
  const desksList = useStore(desksListService.outputs.$desksList);
  const navigate = useNavigate();

  return <DesksList desksList={desksList} navigate={navigate}/>;
};
