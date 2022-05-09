import { UserResponseDto } from "../../../../../../../../api/types";

export interface HeaderProps {
  handleSubmit: () => void;
  me: UserResponseDto | null;
}