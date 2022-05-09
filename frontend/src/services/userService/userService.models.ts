import { createDomain } from "effector";
import { createGate } from "effector-react";
import { UserResponseDto } from "../../api/types";
import { getMe } from "./userService.api";
import { User } from "./userService.types";

const userServiceDomain = createDomain("userService");

const GetUserGate = createGate();

const getUserFx = userServiceDomain.createEffect<void, UserResponseDto>(getMe);

const $me = userServiceDomain.createStore<User | null>(null);

export const userService = {
  inputs: {
      GetUserGate,
      getUserFx
  },
  outputs: {
      $me
  },
};
