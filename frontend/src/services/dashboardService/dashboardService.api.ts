import { api } from "../../api/axios";
import { Desks } from "./dashboardService.types";

export const getDesksRequest = async (): Promise<Desks> => 
  (await api.get("http://localhost:9000/api/desks")).data

