import { createDomain } from "effector";
import { signInService } from "../signInService";
import { signUpService } from "../signUpService";
import { User } from "./userService.types";

const userServiceDomain = createDomain("userService");

const $user = userServiceDomain.createStore<User | null>(null);
const signIn = userServiceDomain.createEvent();

export const userService = {
  inputs: {
    signIn: signInService.outputs.signInSuccess,
  },
  outputs: {
    $user
  },
};
