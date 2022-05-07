import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Greeting = styled.div`
  font-size: 60px;
  font-weight: 900;
`;

export const GradientTitle = styled.span`
  background: linear-gradient(45deg, #00aeffc7, #0d61bc, #ff00a2, #ff0000);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #0b2349;
  display: table;
`;
