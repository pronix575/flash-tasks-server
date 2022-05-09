import { FC } from "react";
import { Outlet } from "react-router-dom";
import { userService } from "../../../../../userService";
import { HeaderContainer } from "./components/Header/Header.container";

export const AuthLayout: FC = () => {
  const { GetUserGate } = userService.inputs;
  return (
    <>
      <GetUserGate />
      <HeaderContainer />
      <Outlet />
    </>
  );
};
