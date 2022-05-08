import { Form, Input } from "antd";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../../shared/components/Button";
import { LinkText, Wrapper } from "./SignInForm.styled";
import { SignInFormProps } from "./SignInForm.types";

export const SignInForm: FC<SignInFormProps> = () => {
  return (
    <Wrapper>
      <Form.Item label="Name">
        <Input placeholder="input name" />
      </Form.Item>
      <Form.Item label="Email">
        <Input placeholder="input password" type="password" />
      </Form.Item>
      <Button block={true} size={"sm"}>
        Sign in
      </Button>
      <Link to="/SignUp">
        <LinkText>Does not have an account?</LinkText>
      </Link>
    </Wrapper>
  );
};
