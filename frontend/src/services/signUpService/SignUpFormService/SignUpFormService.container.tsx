import { message } from "antd";
import { useEvent, useStore } from "effector-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signUpService } from "../signUpService.models";
import { SignUpForm } from "./components/SignUpForm";
import { SignUpFormService } from "./SignUpFormService.models";

export const SignUpFormContainer = () => {
  const navigate = useNavigate();

  const handleSubmit = useEvent(SignUpFormService.inputs.signUp);
  const loading = useStore(signUpService.outputs.$loading);
  const signUpSuccess = signUpService.outputs.signUpSuccess;
  const signUpFailed = signUpService.outputs.signUpFailed;

  useEffect(() => {
    signUpFailed.watch((res: any) => {
      const errorMessage: string | string[] = res.response.data.message;

      message.error(errorMessage[0]);
    });
  }, []);

  useEffect(
    () =>
      signUpSuccess.watch(() => {
        message.success("Account has been created");
        navigate("/SignIn");
      }),
    []
  );

  return <SignUpForm handleSubmit={handleSubmit} loading={loading} />;
};
