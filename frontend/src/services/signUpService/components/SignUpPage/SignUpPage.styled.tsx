import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Greeting = styled.div`
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
