import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 15px 35px;
  background-color: var(--main-color);
  color: white;
  font-weight: 600;
  font-size: 18px;
  width: min-content;
  border-radius: 15px;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
    box-shadow: 0 5px 10px var();
  }
`;
