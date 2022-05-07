import { Layout } from "../../../../../../../../shared/components/Layout";
import { Logo, StyledHeader, Wrap } from "./Header.styled";

export const Header = () => {
  return (
    <Wrap>
      <StyledHeader>
        <Layout>
            <Logo>TodoList</Logo>
        </Layout>
      </StyledHeader>
    </Wrap>
  );
};
