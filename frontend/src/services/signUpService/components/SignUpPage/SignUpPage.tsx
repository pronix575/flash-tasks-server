import { Layout } from "../../../../shared/components/Layout";
import { SignUpFormContainer } from "../../SignUpFormService/SignUpFormService.container";
import { Wrap } from "./SignUpPage.styled";

export const SignUpPage = () => {
  return (
    <Layout>
      <Wrap>
        <SignUpFormContainer />
      </Wrap>
    </Layout>
  );
};
