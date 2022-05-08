import { CSSProperties } from "styled-components";
import { BaseLayoutProps } from "../../types/baseLayoutProps";

export interface ButtonProps extends BaseLayoutProps {
  style?: CSSProperties;
  block?: boolean;
  size?: "lg" | "sm";
}
