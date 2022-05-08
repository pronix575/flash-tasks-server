import { forward } from "effector";
import { signInService } from "./signInService.models";

forward({
  from: signInService.inputs.signIn,
  to: signInService.inputs.signInFx,
});
