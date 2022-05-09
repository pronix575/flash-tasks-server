import { createDomain } from "effector";
import { signInService } from "../signInService";
import { Tokens } from "./authService.types";

const authServiceDomain = createDomain("authService");

const $isAuth = authServiceDomain.createStore(false);
const $tokens = authServiceDomain.createStore<Tokens | null>(null);

export const authService = {
  inputs: {
    signIn: signInService.outputs.signInSuccess,
  },
  outputs: {
    $isAuth,
    $tokens,
  },
};
