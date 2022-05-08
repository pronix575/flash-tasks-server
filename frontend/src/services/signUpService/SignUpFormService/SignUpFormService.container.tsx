import { useEvent } from "effector-react";
import { SignUpForm } from "./components/SignUpForm";
import { SignUpFormService } from "./SignUpFormService.models";

export const SignUpFormContainer = () => {
  const handleSubmit = useEvent(SignUpFormService.inputs.signUp);

  return <SignUpForm handleSubmit={handleSubmit} />;
};

