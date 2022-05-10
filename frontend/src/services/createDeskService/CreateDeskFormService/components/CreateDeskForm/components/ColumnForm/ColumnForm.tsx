import { Form, Input } from "antd";
import { useFormik } from "formik";
import { FC, useState } from "react";
import { RgbStringColorPicker } from "react-colorful";
import { ColumnCreateDto } from "../../../../../../../api/types";
import { Button } from "../../../../../../../shared/components/Button";
import { ButtonWrapper, ColorPickerWrapper } from "./ColumnForm.styled";
import { ColumnFormProps } from "./ColumnForm.types";

export const ColumnForm: FC<ColumnFormProps> = ({ column }) => {
  const [active, setActive] = useState(false);

  const { values, setFieldValue, handleChange, submitForm } =
    useFormik<ColumnCreateDto>({
      initialValues: {
        color: "",
        name: "",
      },
      onSubmit: () => void 0,
    });

  return (
    <>
      <Form.Item label="Name">
        <Input
          name="name"
          placeholder="name of column"
          value={values.name}
          onChange={handleChange}
          style={{
            backgroundColor: `${values.color}`,
            borderColor: `${values.color}`,
          }}
        />
      </Form.Item>
      <Form.Item label="Color">
        <ColorPickerWrapper active={active}>
          <RgbStringColorPicker
            color={values.color}
            onChange={(e) => setFieldValue("color", e)}
          />
        </ColorPickerWrapper>
        <ButtonWrapper active={active}>
          <Button
            style={{ color: "var(--main-color)" }}
            size="sm"
            outlined
            onClick={() => setActive(!active)}
          >
            Choose color
          </Button>
        </ButtonWrapper>
      </Form.Item>
    </>
  );
};
