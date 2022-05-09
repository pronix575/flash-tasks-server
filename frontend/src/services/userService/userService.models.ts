import { createDomain } from "effector";
import { createGate } from "effector-react";
import { getMe } from "./userService.api";
import { User } from "./userService.types";

const userServiceDomain = createDomain("userService");

const GetUserGate = createGate();

const getUser = userServiceDomain.createEvent();
const getUserFx = userServiceDomain.createEffect(getMe);

const $me = userServiceDomain.createStore<User | null>(null);

export const userService = {
  inputs: {
      GetUserGate,
      getUser,
      getUserFx
  },
  outputs: {
      $me,
      getUserOpened : GetUserGate.open,
  },
};
