import { FC } from "react";
import { Wrapper } from "./Button.styled";
import { ButtonProps } from "./Button.types";

export const Button: FC<ButtonProps> = ({
  children,
  style,
  size = "lg",
  block = false,
  onClick,
}) => {
  return (
    <Wrapper style={style} size={size} block={block} onClick={onClick}>
      {children}
    </Wrapper>
  );
};
