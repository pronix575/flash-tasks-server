import { FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../../../../../../shared/components/Button";
import { Layout } from "../../../../../../../../shared/components/Layout";
import {
  Logo,
  StyledHeader,
  UserName,
  UserWrapper,
  Wrap,
  Wrapper,
} from "./Header.styled";
import { HeaderProps } from "./Header.types";

export const Header: FC<HeaderProps> = ({ me, handleSubmit }) => {
  return (
    <Wrap>
      <StyledHeader>
        <Layout>
          <Wrapper>
            <Link to="/Dashboard">
              <Logo>TodoList</Logo>
            </Link>
            <UserWrapper>
              <UserName>{me?.name}</UserName>
              <Button
                size="sm"
                onClick={handleSubmit}
                style={{ marginLeft: "30px" }}
              >
                Logout
              </Button>
            </UserWrapper>
          </Wrapper>
        </Layout>
      </StyledHeader>
    </Wrap>
  );
};
