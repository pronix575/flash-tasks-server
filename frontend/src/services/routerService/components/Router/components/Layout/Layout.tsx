import { Outlet } from "react-router-dom";
import { Header, HeaderWrap } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <HeaderWrap>
        <Header></Header>
      </HeaderWrap>
      <Outlet />
    </>
  );
};
