import { SignInRequestPayload } from "../../../signInService.types";

export interface SignInFormProps {
  handleSubmit: (payload: SignInRequestPayload) => void;
  loading: boolean;
}
