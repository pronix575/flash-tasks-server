import { forward, sample } from "effector";
import { deskService } from "./deskService.models";

deskService.outputs.$desk.on(
  deskService.input.getDeskFx.doneData,
  (_, desk) => desk
);

forward({
    from: deskService.input.GetDesk.open,
    to: deskService.input.getDeskFx
})
