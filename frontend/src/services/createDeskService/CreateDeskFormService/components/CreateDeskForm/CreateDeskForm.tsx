import { FC } from "react";
import { ButtonWrapper, ErrorText, Wrapper } from "./CreateDeskForm.styled";
import { CreateDeskFormProps } from "./CreateDeskForm.types";
import * as Yup from "yup";
import { CreateDeskResponse } from "../../../createDeskService.types";
import { useFormik } from "formik";
import { ColumnCreateDto } from "../../../../../api/types";
import { Form, Input } from "antd";
import { Button } from "../../../../../shared/components/Button";

const CreateDeskSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(30)
    .required("Name is required"),
});

export const CreateDeskForm: FC<CreateDeskFormProps> = ({
  handleSubmit,
  loading,
}) => {
  const { values, handleChange, errors, submitForm } =
    useFormik<CreateDeskResponse>({
      initialValues: {
        name: "",
        columns: [] as ColumnCreateDto[],
      },
      validateOnBlur: false,
      validateOnChange: false,
      validationSchema: CreateDeskSchema,
      onSubmit: handleSubmit,
    });

  return (
    <Wrapper>
      <Form.Item label="Name of new desk">
        <Input
          value={values.name}
          name="name"
          onChange={handleChange}
          placeholder="Name"
          status={errors.name && "error"}
        />
        <ErrorText>{errors.name}</ErrorText>
      </Form.Item>
      <Form.Item label="Columns">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridGap: "15px",
          }}
        >
          <Form.Item label="Name">
            <Input placeholder="input name" />
          </Form.Item>
          <Form.Item label="Color">
            <div
              style={{ width: "100%", backgroundColor: "red", height: "20px" }}
            >color</div>
          </Form.Item>
        </div>
        <Button style={{ color: "var(--main-color)" }} size="sm" outlined>
          + Add column
        </Button>
      </Form.Item>

      <ButtonWrapper>
        <Button block={false} size="sm" onClick={submitForm} loading={loading}>
          Create desk
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
