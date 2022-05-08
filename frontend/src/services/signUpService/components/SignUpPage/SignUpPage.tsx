import { Layout } from "../../../../shared/components/Layout";
import { SignUpFormContainer } from "../../SignUpFormService/SignUpFormService.container";
import { GradientTitle, Greeting, Wrap } from "./SignUpPage.styled";

export const SignUpPage = () => {
  return (
    <Layout>
      <Wrap>
        <Greeting>
          <GradientTitle>
            The most <br />
            powerful TodoList
          </GradientTitle>
        </Greeting>
        <SignUpFormContainer />
      </Wrap>
    </Layout>
  );
};
