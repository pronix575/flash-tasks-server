import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Greeting = styled.div`
  user-select: none;
  font-size: 40px;
  font-weight: 900;
  color: white;
`;

export const GradientTitle = styled.span`
  background: linear-gradient(45deg, #007bff, #ff00a2, #ff0000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #0b2349;
`;

export const FormWrapper = styled.div`
  @media (min-width: 0) and (max-width: 900px) {
    display: none;
  }
`;

export const SignUpButtonWrapper = styled.div`
  margin-left: 15px;
  @media (min-width: 900px) {
    display: none;
  }
`;

export const ButtonsWrapper = styled.div`
  margin-top: 15px;
  display: flex;
`;
