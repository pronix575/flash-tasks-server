import { FC } from "react";
import { BaseLayoutProps } from "../../types/baseLayoutProps";
import { Content, Wrap } from "./Layout.styled";

export const Layout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Wrap>
      <Content>{children}</Content>
    </Wrap>
  );
};
