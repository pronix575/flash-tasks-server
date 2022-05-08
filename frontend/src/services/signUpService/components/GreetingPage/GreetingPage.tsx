import { Link } from "react-router-dom";
import { Button } from "../../../../shared/components/Button";
import { Layout } from "../../../../shared/components/Layout";
import { SignUpFormContainer } from "../../SignUpFormService/SignUpFormService.container";
import {
  FormWrapper,
  GradientTitle,
  Greeting,
  Wrap,
} from "./GreetingPage.styled";

export const GreetingPage = () => {
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
          <Link to="/SignIn">
            <Button style={{ marginTop: 15 }}>Sign in</Button>
          </Link>
        </Greeting>
        <FormWrapper>
          <SignUpFormContainer />
        </FormWrapper>
      </Wrap>
    </Layout>
  );
};
