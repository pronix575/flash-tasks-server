import { FC, useEffect } from "react";
import { Wrap, BackgroundWrap, ModalWrap } from "./Modal.styled";
import { ModalProps } from "./Modal.types";

export const Modal: FC<ModalProps> = ({ children, onHide, show }) => {
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

  return (
    <Wrap>
      <ModalWrap>
        <BackgroundWrap
          onClick={onHide}
          style={{ cursor: onHide ? "pointer" : "default" }}
        />
      </ModalWrap>
    </Wrap>
  );
};
