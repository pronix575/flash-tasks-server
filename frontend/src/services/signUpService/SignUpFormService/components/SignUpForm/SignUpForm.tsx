import { Form, Input } from "antd";
import { FC } from "react";
import { Button } from "../../../../../shared/components/Button";
import { ButtonWrapper, Wrapper } from "./SignUpForm.styled";
import { SignUpFormProps } from "./SignUpForm.types";

export const SignUpForm: FC<SignUpFormProps> = () => {
  return (
    <Wrapper>
      <Form.Item label="Name">
        <Input placeholder="input name" />
      </Form.Item>
      <Form.Item label="Email">
        <Input placeholder="input email" type="email" />
      </Form.Item>
      <Form.Item label="Password">
        <Input placeholder="input password" type="password" />
      </Form.Item>
      <Form.Item label="Confirm Password">
        <Input placeholder="confirm password" type="password" />
      </Form.Item>
      <ButtonWrapper>
        <Button block={true} size={'sm'}>Sign up</Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
