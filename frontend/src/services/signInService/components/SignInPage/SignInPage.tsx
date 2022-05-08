import { Layout } from "../../../../shared/components/Layout";
import { SignInFormContainer } from "../../SignInFormService/SignInFormService.container";
import { Wrap } from "./SignInPage.styled";

export const SignInPage = () => {
  return (
      <Wrap>
        <SignInFormContainer />
      </Wrap>
  );
};
