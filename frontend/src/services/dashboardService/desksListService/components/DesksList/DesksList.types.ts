import { NavigateFunction } from "react-router-dom";
import { Desks } from "../../../dashboardService.types";

export interface DesksListProps {
  desksList: Desks | null;
}
