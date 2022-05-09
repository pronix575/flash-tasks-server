import { createDomain } from "effector";
import { createGate } from "effector-react";
import { signInService } from "../signInService";
import { Tokens } from "./authService.types";

const authServiceDomain = createDomain("authService");

const $isAuth = authServiceDomain.createStore(false);
const $tokens = authServiceDomain.createStore<Tokens | null>(null);

const AuthGate = createGate();

const signInUser = authServiceDomain.createEvent();
const signOutUser = authServiceDomain.createEvent();

const signInSuccess = signInService.outputs.signInSuccess;

export const authService = {
  inputs: {
    AuthGate,
    signInUser,
    signOutUser,
  },
  outputs: {
    $isAuth,
    $tokens,
    authGateOpened: AuthGate.open,
    signInSuccess,
  },
};
