import { api } from "../../api/axios";
import { SignUpRequestPayload } from "./signUpService.types";

export const createUser = async (requstData: SignUpRequestPayload): Promise<void> =>
  await api.post("http://localhost:9000/api/users", requstData);
