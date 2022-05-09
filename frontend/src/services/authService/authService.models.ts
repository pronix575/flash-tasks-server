import { createDomain } from "effector";
import { Tokens } from "./authService.types";

const authServiceDomain = createDomain("authService");

const $isAuth = authServiceDomain.createStore<Boolean>(false);
const $tokens = authServiceDomain.createStore<Tokens | null>(null);

export const authService = {
  inputs: {},
  outputs: {
    $isAuth,
    $tokens,
  },
};
