import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  GreetingPageContainer,
  SignUpPageContainer,
} from "../../../signUpService/signUpService.container";
import { SignInPageContainer } from "../../../signInService/signInService.container";
import { NotAuthLayout } from "./components/NotAuthLayout";
import { AuthLayout } from "./components/AuthLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotAuthLayout />}>
          <Route path="/SignUp" element={<SignUpPageContainer />} />
          <Route path="/SignIn" element={<SignInPageContainer />} />
          <Route index element={<GreetingPageContainer />} />
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path="Dashboard"/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
