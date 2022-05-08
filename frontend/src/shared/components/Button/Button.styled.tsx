import styled from "styled-components";

export const Wrapper = styled.div<{ block?: boolean; size: "lg" | "sm" }>`
  background-color: var(--main-color);
  color: white;
  font-weight: 600;
  width: min-content;
  white-space: nowrap;
  user-select: none; 
  cursor: pointer;

  padding: ${({ size }) => (size === "lg" ? "15px 35px" : '7px 25px')};
  font-size: ${({ size }) => (size === "lg" ? "18px" : '16px')};
  border-radius: ${({ size }) => (size === "lg" ? "15px" : '8px')};
  width: ${({ block }) => (block ? "100%" : "none")};

  display: flex;
  justify-content: center;

  &:hover {
    opacity: 0.9;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
`;
