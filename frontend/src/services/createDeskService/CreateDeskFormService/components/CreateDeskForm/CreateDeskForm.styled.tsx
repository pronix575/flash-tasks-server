import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3px;
`;

export const ErrorText = styled.div`
  color: red;
`;

export const ButtonWrapper = styled.div`
  align-self: flex-end;
  display: flex;
  justify-content: center;
`;

export const ColumnsFormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
`;

