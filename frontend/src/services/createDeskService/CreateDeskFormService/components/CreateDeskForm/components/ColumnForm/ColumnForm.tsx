import { Form, Input } from "antd";
import { useFormik } from "formik";
import { FC } from "react";
import { HexColorPicker } from "react-colorful";
import { ColumnCreateDto } from "../../../../../../../api/types";
import { ColorPickerWrapper } from "./ColumnForm.styled";
import { ColumnFormProps } from "./ColumnForm.types";

export const ColumnForm: FC<ColumnFormProps> = ({ column, onChange }) => {
  return (
    <>
      <Form.Item label="Name">
        <Input
          name="name"
          value={column.name}
          onChange={(e) => {
            onChange({ name: e.target.value, color: column.color });
          }}
          placeholder="name of column"
          style={{
            backgroundColor: `${column.color}70`,
            borderColor: `${column.color}`,
          }}
        />
      </Form.Item>
      <Form.Item label="Color">
        <ColorPickerWrapper>
          <HexColorPicker
            color={column.color}
            onChange={(value) => onChange({ name: column.name, color: value })}
          />
        </ColorPickerWrapper>
      </Form.Item>
    </>
  );
};
