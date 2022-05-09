
import { createDeskService } from "./createDeskService.modals";

createDeskService.outputs.$modalIsOpen
  .on(createDeskService.inputs.openModal, () => true)
  .reset(createDeskService.inputs.closeModal);
