import styled from "styled-components";

export const DeskWrapper = styled.div<{ index: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 200px;
  width: 60px;
  border-radius: 15px;
  background-color: whitesmoke;
  box-shadow: 0px 0px 4px 2px grey;

  writing-mode: vertical-lr;
  color: black;
  user-select: none;
  z-index: ${({ index }) => -index};
`;

export const Wrap = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
`;
