import { SignUpRequestPayload } from "../../../signUpService.types";

export interface SignUpFormProps {
  handleSubmit: (payload: SignUpRequestPayload) => void;
  loading: boolean;
}
