import { Link } from "react-router-dom";
import { Layout } from "../../../../../../../../shared/components/Layout";
import { Logo, StyledHeader, Wrap } from "./Header.styled";

export const Header = () => {
  return (
    <Wrap>
      <StyledHeader>
        <Layout>
            <Link to="/">
            <Logo>TodoList</Logo>
            </Link>
        </Layout>
      </StyledHeader>
    </Wrap>
  );
};
