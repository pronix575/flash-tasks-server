import { useEvent } from "effector-react";
import { SignInForm } from "./components/SignInForm";
import { SignInFormService } from "./SignInFormService.models";

export const SignInFormContainer = () => {
  const handleSubmit = useEvent(SignInFormService.inputs.signIn);


  return <SignInForm handleSubmit={handleSubmit}/>;
};
