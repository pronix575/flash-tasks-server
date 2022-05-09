import { api } from "../../api/axios";
import { UserResponseDto } from "../../api/types";

export const getMe = async (): Promise<UserResponseDto> => {
  return (await api.get("http://localhost:9000/api/users/me")).data;
}