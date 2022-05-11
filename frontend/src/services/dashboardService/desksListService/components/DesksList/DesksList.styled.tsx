import styled from "styled-components";

export const DeskWrapper = styled.div<{ index: number }>`
  display: flex;
  justify-content: center;
  align-items: center;


  height: 200px;
  width: 60px;
  border-radius: 15px;
  background-color: whitesmoke;
  box-shadow: 0px 0px 3px 2px grey;
  transition: all 0.2s;

  writing-mode: vertical-lr;
  color: black;
  user-select: none;
  z-index: ${({ index }) => index};
  cursor: pointer;

  &:hover {
    background-color: #c5c5c5;
  }
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
`;
