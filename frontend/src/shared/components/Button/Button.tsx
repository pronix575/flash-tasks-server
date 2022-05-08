import { FC } from "react";
import { Wrapper } from "./Button.styled";
import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({ children, style }) => {
  return <Wrapper style={style}>{children}</Wrapper>;
};
