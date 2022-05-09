import { api } from "../../api/axios";
import { SignUpRequestPayload } from "./signUpService.types";

export const createUser = (requstData: SignUpRequestPayload): Promise<void> =>
  api.post("http://localhost:9000/api/users", requstData);
