import styled from "styled-components";

export const Wrapper = styled.div<{
  block?: boolean;
  size: "lg" | "sm";
  disabled: boolean;
  outlined: boolean;
}>`
  background-color: ${({ outlined }) =>
    outlined ? "none" : "var(--main-color)"};
  border: 3px solid var(--main-color);
  box-sizing: border-box;
  color: white;
  font-weight: 600;
  width: min-content;
  white-space: nowrap;
  user-select: none;
  cursor: pointer;

  padding: ${({ size }) => (size === "lg" ? "12px 35px" : "2px 25px")};
  font-size: ${({ size }) => (size === "lg" ? "18px" : "16px")};
  border-radius: ${({ size }) => (size === "lg" ? "15px" : "8px")};
  width: ${({ block }) => (block ? "100%" : "none")};

  display: flex;
  justify-content: center;

  &:hover {
    opacity: 0.9;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }

  ${({ disabled }) =>
    disabled &&
    `
    opacity: 0.6 !important;
    cursor: progress; 
  `}
`;
