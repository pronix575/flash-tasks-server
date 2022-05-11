import { createDomain } from "effector";
import { createGate } from "effector-react";
import { getDeskRequest } from "./deskService.api";
import { Desk } from "./deskService.types";

const deskServiceDomain = createDomain("deskService");

const $desk = deskServiceDomain.createStore<Desk | null>(null);

const getDeskFx = deskServiceDomain.createEffect<string, Desk>(getDeskRequest);

const GetDesk = createGate();

export const deskService = {
  input: {
    GetDesk,
    getDeskFx,
  },
  outputs: {
    $desk,
  },
};
