import { api } from "../../api/axios";
import { CreateDeskResponse } from "./createDeskService.types";

export const createNewDesk = async (
  responseData: CreateDeskResponse
): Promise<void> =>
  await api.post("http://localhost:9000/api/desks", responseData);
