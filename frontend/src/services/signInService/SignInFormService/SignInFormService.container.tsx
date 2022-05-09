import { useEvent, useStore } from "effector-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useNetworkErrors } from "../../../hooks/useNetworkErrors";
import { signInService } from "../signInService.models";
import { SignInForm } from "./components/SignInForm";
import { SignInFormService } from "./SignInFormService.models";

export const SignInFormContainer = () => {
  const navigate = useNavigate();

  const handleSubmit = useEvent(SignInFormService.inputs.signIn);
  const loading = useStore(signInService.outputs.$loading);
  const signInSuccess = signInService.outputs.signInSuccess;
  const signInFailed = signInService.outputs.signInFailed;

  useNetworkErrors(signInFailed);

  useEffect(
    () =>
      signInSuccess.watch(() => {
        navigate("/");
      }),
    []
  );

  return <SignInForm handleSubmit={handleSubmit} loading={loading} />;
};
