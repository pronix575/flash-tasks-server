import { useEvent, useStore } from "effector-react";
import { createDeskService } from "../createDeskService.models";
import { CreateDeskForm } from "./components/CreateDeskForm";
import { createDeskFormService } from "./CreateDeskForm.models";

export const CreateDeskFormContainer = () => {
  const handleSubmit = useEvent(createDeskFormService.inputs.createDesk);
  const loading = useStore(createDeskService.outputs.$loading);


  return <CreateDeskForm handleSubmit={handleSubmit} loading={loading} />;
};
