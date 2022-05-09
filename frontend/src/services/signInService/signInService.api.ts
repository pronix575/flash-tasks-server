import { api } from "../../api/axios";
import { SignInRequestPayload, Tokens } from "./signInService.types";

export const login = async (
  requstData: SignInRequestPayload
): Promise<Tokens> =>
  (await api.post("http://localhost:9000/api/auth/login", requstData)).data;
