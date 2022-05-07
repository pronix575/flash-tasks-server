import { forward } from "effector";
import { signUpService } from "./signUpService.models";

forward({
  from: signUpService.inputs.signUp,
  to: signUpService.inputs.signUpFx,
});
