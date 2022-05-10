import { FC } from "react";
import {
  ButtonWrapper,
  ColumnsFormWrapper,
  ErrorText,
  Wrapper,
} from "./CreateDeskForm.styled";
import { CreateDeskFormProps } from "./CreateDeskForm.types";
import * as Yup from "yup";
import { CreateDeskResponse } from "../../../createDeskService.types";
import { useFormik } from "formik";
import { ColumnCreateDto } from "../../../../../api/types";
import { Form, Input } from "antd";
import { Button } from "../../../../../shared/components/Button";
import { ColumnForm } from "./components/ColumnForm";

const CreateDeskSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(30)
    .required("Name is required"),
  columns: Yup.array().max(6),
});

export const CreateDeskForm: FC<CreateDeskFormProps> = ({
  handleSubmit,
  loading,
}) => {
  const { values, setFieldValue, handleChange, errors, submitForm } =
    useFormik<CreateDeskResponse>({
      initialValues: {
        name: "",
        columns: [{ name: "", color: "" }] as ColumnCreateDto[],
      },
      validateOnBlur: false,
      validateOnChange: false,
      validationSchema: CreateDeskSchema,
      onSubmit: handleSubmit,
    });

  const addNewColumn = () => {
    setFieldValue("columns", [...values.columns, { name: "", color: "" }]);
  };

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
        <ColumnsFormWrapper>
          {values.columns.map((column, index) => (
            
            <ColumnForm column={column} key={index}/>
          ))}
        </ColumnsFormWrapper>
        <Button
          style={{ color: "var(--main-color)" }}
          size="sm"
          outlined
          onClick={addNewColumn}
          
        >
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
