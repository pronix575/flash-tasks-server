import { api } from "../../api/axios";
import { Desk } from "./deskService.types";

export const getDeskRequest = async (
  deskId: string | undefined
): Promise<Desk> =>
  (await api.get(`http://localhost:9000/api/desks/${deskId}`)).data;
