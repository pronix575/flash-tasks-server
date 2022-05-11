import styled from "styled-components";

export const DeskWrapper = styled.div`
  display: flex;
  height: 140px;
  width: 250px;
  margin: 10px 10px;
  border-radius: 15px;
  background-color: var(--main-color-back-deep);
  transition: all 0.2s;

  cursor: pointer;

  &:hover {
    background-color: #303030;
  }
`;

export const TitleOfDesk = styled.div`
  margin-left: 30px;
  margin-top: 10px;
  color: grey;
  font-size: 16px;
  font-weight: 500;
  user-select: none;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

`;
