import { forward } from "effector";
import { signInService } from "./signInService.models";
import { Tokens } from "./signInService.types";

forward({
  from: signInService.inputs.signIn,
  to: signInService.inputs.signInFx,
});

signInService.inputs.signInFx.doneData.watch((tokens: Tokens) => {
  localStorage.setItem("AccessToken", tokens.access);
  localStorage.setItem("RefreshToken", tokens.refresh);
});
