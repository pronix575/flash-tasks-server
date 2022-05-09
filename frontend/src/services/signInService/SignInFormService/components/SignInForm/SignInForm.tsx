import { Form, Input } from "antd";
import { useFormik } from "formik";
import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../../shared/components/Button";
import { ErrorText, LinkText, Wrapper } from "./SignInForm.styled";
import { SignInFormProps } from "./SignInForm.types";
import * as Yup from "yup";
import { SignInRequestPayload } from "../../../signInService.types";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const SignInForm: FC<SignInFormProps> = () => {
  const { values, handleChange, errors, submitForm } = useFormik<SignInRequestPayload>({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnBlur: false,
    validateOnChange: false,
    validationSchema: SignInSchema,
    onSubmit: () => void 0,
  });

  return (
    <Wrapper>
      <Form.Item label="Email">
        <Input
          value={values.email}
          name="email"
          placeholder="Email"
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
      <Button block={true} size={"sm"} onClick={submitForm}>
        Sign in
      </Button>
      <Link to="/SignUp">
        <LinkText>Does not have an account?</LinkText>
      </Link>
    </Wrapper>
  );
};
