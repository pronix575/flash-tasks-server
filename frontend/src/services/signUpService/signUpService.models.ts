import { createDomain } from "effector";
import { createUser } from "./signUpService.api";
import { SignUpRequestPayload } from "./signUpService.types";

const signUpServiceDomain = createDomain("signUpService");

const signUp = signUpServiceDomain.createEvent<SignUpRequestPayload>();
const signUpFx = signUpServiceDomain.createEffect<SignUpRequestPayload, void>(createUser);

const signUpSuccess = signUpFx.doneData;
const signUpFailed = signUpFx.failData;

const $loading = signUpFx.pending;

export const signUpService = {
  inputs: {
    signUpFx,
    signUp,
  },
  outputs: {
    $loading,
    signUpSuccess,
    signUpFailed,
  },
};
