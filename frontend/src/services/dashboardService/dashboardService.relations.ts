import { forward } from "effector";
import { dashboardService } from "./dashboardService.models";

dashboardService.outputs.$desksList.on(
  dashboardService.inputs.getDesksFx.doneData,
  (_, desks) => desks
);

forward({
  from: [dashboardService.inputs.GetDesksGate.open],
  to: dashboardService.inputs.getDesksFx,
});
