import styled, { keyframes } from "styled-components";

export const Wrap = styled.div`
  position: relative;
  z-index: 100;
`;

export const BackgroundWrap = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background: #00000025;
  backdrop-filter: blur(4px);
  cursor: pointer;
`;

export const ModalWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: fixed;
`;

export const openModelAnimation = keyframes`
    0% { 
        opacity: 0; 
        margin-top: 50px;
    }
    100% { 
        opacity: 1; 
        margin-top: 0px;
    }
`;

export const StyledModal = styled.div<{ pending?: boolean }>`
  margin: 0 15px;
  padding: 15px;
  background: white;
  width: 100%;
  max-width: 600px;
  border-radius: 15px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  z-index: 101;
  animation-name: ${openModelAnimation};
  animation-duration: 0.2s;
  ${({ pending }) =>
    pending &&
    `
    display: flex;
    justify-content: center;
    height: 150px;
  `}
`;

export const Title = styled.div`
  font-weight: 600;
  font-size: 20px;
`;

export const Close = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 35px;
  height: 35px;
  transition: 0.2s;
  cursor: pointer;
  font-size: 20px;
  svg {
    stroke-width: 3px;
  }
  &:hover {
    background: #00000033;
  }
`;

export const Content = styled.div`
  overflow-y: auto;
  max-height: 500px;
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
