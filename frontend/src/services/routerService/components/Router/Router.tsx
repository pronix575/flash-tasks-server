import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {
  GreetingPageContainer,
  SignUpPageContainer,
} from "../../../signUpService/signUpService.container";
import { SignInPageContainer } from "../../../signInService/signInService.container";
import { NotAuthLayout } from "./components/NotAuthLayout";
import { AuthLayout } from "./components/AuthLayout";
import { authService } from "../../../authService";
import { useStore } from "effector-react";

export const Router = () => {
  const isAuth = useStore(authService.outputs.$isAuth);

  const { AuthGate } = authService.inputs;

  return (
    <BrowserRouter>
      <AuthGate />
      <Routes>
        {!isAuth && (
          <Route path="/" element={<NotAuthLayout />}>
            <Route path="/SignUp" element={<SignUpPageContainer />} />
            <Route path="/SignIn" element={<SignInPageContainer />} />
            <Route index element={<GreetingPageContainer />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        )}
        {isAuth && (
          <Route path="/" element={<AuthLayout />}>
            <Route path="/Dashboard" />
            <Route path="*" element={<Navigate to="/Dashboard" />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};
