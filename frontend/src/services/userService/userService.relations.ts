import { forward } from "effector";
import { userService } from "./userService.models";

userService.outputs.$me
.on(userService.inputs.getUserFx.doneData, (_, me) => me)

