import { createDomain } from "effector";
import { dashboardService } from "../dashboardService";
import { createNewDesk } from "./createDeskService.api";
import { CreateDeskResponse } from "./createDeskService.types";

const createDeskServiceDomain = createDomain("createDeskService");

const $modalIsOpen = createDeskServiceDomain.createStore(false);

const openModal = createDeskServiceDomain.createEvent();
const closeModal = createDeskServiceDomain.createEvent();

const createDesk = createDeskServiceDomain.createEvent<CreateDeskResponse>();
const createDeskFx = createDeskServiceDomain.createEffect<CreateDeskResponse, void>(createNewDesk);

const $loading = createDeskFx.pending;

const createDeskSuccess = createDeskFx.doneData;
const createDeskFailed = createDeskFx.failData;

export const createDeskService = {
  inputs: {
    getDesksFx : dashboardService.inputs.getDesksFx,
    openModal,
    closeModal,
    createDesk,
    createDeskFx,
  },
  outputs: {
    $modalIsOpen,
    $loading,
    createDeskSuccess,
    createDeskFailed,
  },
};
