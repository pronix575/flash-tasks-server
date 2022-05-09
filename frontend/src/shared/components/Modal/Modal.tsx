import { FC, useEffect } from "react";
import {
  Wrap,
  BackgroundWrap,
  ModalWrap,
  StyledModal,
  Title,
  Close,
  Content,
  CloseWrapper,
} from "./Modal.styled";
import { ModalProps } from "./Modal.types";
import { XLg } from "react-bootstrap-icons";

export const Modal: FC<ModalProps> = ({
  children,
  onHide,
  show,
  customContent,
  title,
}) => {
  useEffect(() => {
    if (show) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "";
    }
    return () => {
      window.document.body.style.overflow = "";
    };
  }, [show]);

  return show ? (
    <Wrap>
      <ModalWrap>
        <BackgroundWrap
          onClick={onHide}
          style={{ cursor: onHide ? "pointer" : "default" }}
        />
        <StyledModal>
          <CloseWrapper>
          <Title>{title}</Title>
          {onHide && (
            <Close onClick={onHide}>
              <XLg />
            </Close>
          )}
          </CloseWrapper>
        <Content>{children}</Content>
        </StyledModal>
      </ModalWrap>
    </Wrap>
  ) : null;
};
