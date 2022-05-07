import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpPageContainer } from "../../../signUpService/signUpService.container";
import { Layout } from "./components/Layout/Layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SignUpPageContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
