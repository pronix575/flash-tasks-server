import { Form, Input } from "antd";
import { useFormik } from "formik";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../../shared/components/Button";
import {
  ButtonWrapper,
  ErrorText,
  LinkText,
  Wrapper,
} from "./SignUpForm.styled";
import { SignUpFormProps } from "./SignUpForm.types";
import * as Yup from "yup";
import { SignUpRequestPayload } from "../../../signUpService.types";

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Name must be at least 4 characters")
    .max(25)
    .required("Name is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(30),
  passwordConfirmation: Yup.string()
    .required("You must confirm password")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});

export const SignUpForm: FC<SignUpFormProps> = ({handleSubmit, loading}) => {
  const { values, handleChange, errors, submitForm } = useFormik<SignUpRequestPayload>(
    {
      initialValues: {
        email: "",
        name: "",
        password: "",
        passwordConfirmation: "",
      },
      validateOnBlur: false,
      validateOnChange: false,
      validationSchema: SignUpSchema,
      onSubmit: handleSubmit,
    }
  );

  return (
    <Wrapper>
      <Form.Item label="Name">
        <Input
          value={values.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
          status={errors.name && "error"}
        />
        <ErrorText>{errors.name}</ErrorText>
      </Form.Item>
      <Form.Item label="Email">
        <Input
          value={values.email}
          name="email"
          placeholder="Email"
          type="email"
          onChange={handleChange}
          status={errors.email && "error"}
        />
        <ErrorText>{errors.email}</ErrorText>
      </Form.Item>
      <Form.Item label="Password">
        <Input.Password
          value={values.password}
          name="password"
          placeholder="Password"
          onChange={handleChange}
          status={errors.password && "error"}
        />
        <ErrorText>{errors.password}</ErrorText>
      </Form.Item>
      <Form.Item label="Confirm Password">
        <Input.Password
          value={values.passwordConfirmation}
          name="passwordConfirmation"
          placeholder="Confirm password"
          onChange={handleChange}
          status={errors.passwordConfirmation && "error"}
        />
        <ErrorText>{errors.passwordConfirmation}</ErrorText>
      </Form.Item>
      <ButtonWrapper>
        <Button block size="sm" onClick={submitForm} loading={loading}>
          Sign up
        </Button>
      </ButtonWrapper>
      <Link to="/SignIn">
        <LinkText>Already have an account?</LinkText>
      </Link>
    </Wrapper>
  );
};
