import { Layout } from "../../../../shared/components/Layout";
import { SignUpForm } from "./components/SignUpForm";
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
        <SignUpForm />
      </Wrap>
    </Layout>
  );
};
