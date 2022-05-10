import { createDomain } from "effector";
import { createGate } from "effector-react";
import { getDesksRequest } from "./dashboardService.api";
import { Desks } from "./dashboardService.types";

const dashboardServiceDomain = createDomain("dashboardService");


const getDesksFx = dashboardServiceDomain.createEffect<void, Desks>(
  getDesksRequest
);

const $desksList = dashboardServiceDomain.createStore<Desks | null>(null);

const GetDesksGate = createGate();

export const dashboardService = {
  inputs: {
    getDesksFx,
    GetDesksGate,
  },
  outputs: {
    $desksList,
  },
};
