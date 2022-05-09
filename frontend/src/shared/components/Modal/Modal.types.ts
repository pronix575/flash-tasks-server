import { BaseLayoutProps } from "../../types/baseLayoutProps";

export interface ModalProps extends BaseLayoutProps {
    show: boolean;
    title?: string;
    onHide?(): void;
    customContent?: boolean;
    width?: number;
    pending?: boolean;
}