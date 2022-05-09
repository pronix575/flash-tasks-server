import { CSSProperties } from "styled-components";
import { BaseLayoutProps } from "../../types/baseLayoutProps";

export interface ButtonProps extends BaseLayoutProps {
  style?: CSSProperties;
  block?: boolean;
  loading?: boolean;
  size?: "lg" | "sm";
  onClick?: VoidFunction;
  outlined?: boolean;
}
