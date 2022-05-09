import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../../../../../shared/components/Button";
import { Layout } from "../../../../../../../../shared/components/Layout";
import { authService } from "../../../../../../../authService";
import { Logo, StyledHeader, Wrap, Wrapper } from "./Header.styled";

export const Header: FC = () => {
  const handleSubmitLogout = authService.inputs.signOutUser;

  return (
    <Wrap>
      <StyledHeader>
        <Layout>
          <Wrapper>
            <Link to="/Dashboard">
              <Logo>TodoList</Logo>
            </Link>
            <Button size="sm" onClick={handleSubmitLogout}>Logout</Button>
          </Wrapper>
        </Layout>
      </StyledHeader>
    </Wrap>
  );
};
