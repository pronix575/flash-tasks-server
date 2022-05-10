import { forward } from "effector";
import { createDeskService } from "./createDeskService.models";

createDeskService.outputs.$modalIsOpen
  .on(createDeskService.inputs.openModal, () => true)
  .reset(createDeskService.inputs.closeModal);

forward({
  from: createDeskService.inputs.createDesk,
  to: [createDeskService.inputs.createDeskFx],
});

forward({
  from: createDeskService.outputs.createDeskSuccess,
  to: [
    createDeskService.inputs.closeModal,
    createDeskService.inputs.getDesksFx,
  ],
});
