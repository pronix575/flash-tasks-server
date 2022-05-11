import { useParams } from "react-router-dom";
import { DeskPage } from "./components/DeskPage";
import { deskService } from "./deskService.models";

export const DeskContainer = () => {
  const { GetDesk } = deskService.input;

  const { deskId } = useParams();
  return (
    <>
      <GetDesk deskId={deskId}/>
      <DeskPage></DeskPage>
    </>
  );
};
