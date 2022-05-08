import { Button } from "../../../../shared/components/Button";
import { Layout } from "../../../../shared/components/Layout";
import { SignUpFormContainer } from "../../SignUpFormService/SignUpFormService.container";
import { GradientTitle, Greeting, Wrap } from "./SignUpPage.styled";

export const SignUpPage = () => {
  return (
    <Layout>
      <Wrap>
        <Greeting>
          <div>
            Start using{" "}
            <GradientTitle>
              The most <br />
              powerful TodoList
            </GradientTitle>{" "}
            right now!
          </div>
          <Button style={{ marginTop: 15 }}>Sign in</Button>
        </Greeting>
        <SignUpFormContainer />
      </Wrap>
    </Layout>
  );
};
