import { SignUpForm } from "./components/SignUpForm";
import { GradientTitle, Greeting, Wrap } from "./SignUpPage.styled";

export const SignUpPage = () => {
  return (
    <Wrap>
      <Greeting>
        <GradientTitle>
          The most <br />
          powerful TodoList
        </GradientTitle>
      </Greeting>
      <SignUpForm />
    </Wrap>
  );
};
