import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpPageContainer } from "../../../signUpService/signUpService.container";
import { NotAuthLayout } from "./components/NotAuthLayout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotAuthLayout />}>
          <Route index element={<SignUpPageContainer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
