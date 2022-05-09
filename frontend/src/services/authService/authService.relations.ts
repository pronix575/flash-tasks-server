import { forward, sample } from "effector";
import { signInService } from "../signInService";
import { authService } from "./authService.models";
import { Tokens } from "./authService.types";

forward({
  from: authService.outputs.signInSuccess,
  to: authService.inputs.signInUser,
});

authService.outputs.$isAuth
  .on(authService.inputs.signInUser, () => true)
  .reset(authService.inputs.signOutUser);

authService.inputs.signOutUser.watch(() => {
  localStorage.clear();
});

sample({
  clock: authService.outputs.authGateOpened,
  fn: () => {
    const access = localStorage.getItem("AccessToken");
    const refresh = localStorage.getItem("RefreshToken");

    return Boolean(access && refresh);
  },
  target: authService.inputs.signInUser,
});

signInService.inputs.signInFx.doneData.watch((tokens: Tokens) => {
  localStorage.setItem("AccessToken", tokens.access);
  localStorage.setItem("RefreshToken", tokens.refresh);
});
