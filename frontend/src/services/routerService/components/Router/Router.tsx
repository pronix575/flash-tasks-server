import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUpPageContainer } from "../../../signUpService/signUpService.container";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUpPageContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
