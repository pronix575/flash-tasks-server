import { BaseLayoutProps } from "../../../../shared/types/baseLayoutProps";

export interface CreateDeskModalProps extends BaseLayoutProps {
    show: boolean;
    handleClosingModal?: (()=> void) | undefined;
}