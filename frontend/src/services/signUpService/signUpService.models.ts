import { createDomain } from "effector";
import { SignUpRequestPayload } from "./signUpService.types";

const signUpServiceDomain = createDomain("signUpService");

const signUpFx = signUpServiceDomain.createEffect<SignUpRequestPayload, void>();

const signUpSuccess = signUpFx.doneData;
const signUpFailed = signUpFx.failData;

const $loading = signUpFx.pending;

const signUp = signUpServiceDomain.createEvent<SignUpRequestPayload>();

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
