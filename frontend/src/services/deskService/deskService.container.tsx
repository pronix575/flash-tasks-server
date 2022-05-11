import { useStore } from "effector-react";
import { useParams } from "react-router-dom";
import { DeskPage } from "./components/DeskPage";
import { deskService } from "./deskService.models";

export const DeskContainer = () => {
  const desk = useStore(deskService.outputs.$desk)
  const { GetDesk } = deskService.inputs;

  const { id } = useParams();
  return (
    <>
      <GetDesk deskId={id} />
      <DeskPage desk={desk}></DeskPage>
    </>
  );
};
