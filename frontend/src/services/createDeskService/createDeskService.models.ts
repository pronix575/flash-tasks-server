import { createDomain } from "effector";
import { createNewDesk } from "./createDeskService.api";
import { CreateDeskResponse } from "./createDeskService.types";

const createDeskServiceDomain = createDomain("createDeskService");

const $modalIsOpen = createDeskServiceDomain.createStore(false);

const openModal = createDeskServiceDomain.createEvent();
const closeModal = createDeskServiceDomain.createEvent();

const createDesk = createDeskServiceDomain.createEvent<CreateDeskResponse>();
const createDeskFx = createDeskServiceDomain.createEffect<CreateDeskResponse, void>(createNewDesk);

const $loading = createDeskFx.pending;


export const createDeskService = {
  inputs: {
    openModal,
    closeModal,
    createDesk,
    createDeskFx
  },
  outputs: {
    $modalIsOpen,
    $loading
  },
};
