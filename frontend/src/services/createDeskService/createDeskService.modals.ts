import { createDomain } from "effector";

const createDeskServiceDomain =  createDomain("createDeskService")

const $modalIsOpen = createDeskServiceDomain.createStore(false);

const openModal = createDeskServiceDomain.createEvent();
const closeModal = createDeskServiceDomain.createEvent();

export const createDeskService = {
  inputs: {
      openModal,
      closeModal
  },
  outputs: {
      $modalIsOpen
  },
};
