import { Link } from "react-router-dom";
import { Button } from "../../../../shared/components/Button";
import { Layout } from "../../../../shared/components/Layout";
import { SignUpFormContainer } from "../../SignUpFormService/SignUpFormService.container";
import {
  ButtonsWrapper,
  FormWrapper,
  GradientTitle,
  Greeting,
  SignUpButtonWrapper,
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
          <ButtonsWrapper>
            <Link to="/SignIn">
              <Button>Sign in</Button>
            </Link>
            <SignUpButtonWrapper>
              <Link to="/SignUp">
                <Button outlined>Sign Up</Button>
              </Link>
            </SignUpButtonWrapper>
          </ButtonsWrapper>
        </Greeting>
        <FormWrapper>
          <SignUpFormContainer />
        </FormWrapper>
      </Wrap>
    </Layout>
  );
};
