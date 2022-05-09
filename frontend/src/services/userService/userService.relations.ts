import { forward, sample } from "effector";
import { userService } from "./userService.models";

userService.outputs.$me.on(
  userService.inputs.getUserFx.doneData,
  (_, me) => me
);

forward({
  from: userService.inputs.GetUserGate.open,
  to: userService.inputs.getUserFx,
});
