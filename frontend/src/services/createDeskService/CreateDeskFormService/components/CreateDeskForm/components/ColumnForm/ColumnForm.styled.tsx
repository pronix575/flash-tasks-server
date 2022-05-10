import styled from "styled-components";

export const ColorPickerWrapper = styled.div<{ active: boolean }>`
  display: ${({ active }) => (active ? "block" : "none")};

  .react-colorful {
    width: 150px;
    height: 60px;
  }
  .react-colorful__saturation {
    border-bottom: none;
  }
  .react-colorful__hue {
    height: 8px;
  }
  .react-colorful__saturation-pointer {
    width: 14px;
    height: 14px;
  }
  .react-colorful__hue-pointer {
    width: 14px;
    height: 14px;
  }
  .react-colorful__alpha {

  }
`;

export const ButtonWrapper = styled.div<{ active: boolean }>`
  display: ${({ active }) => (!active ? "block" : "none")};
`;
