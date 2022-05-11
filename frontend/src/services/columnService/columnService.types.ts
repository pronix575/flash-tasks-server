import { ColumnResponseDto } from "../../api/types";

export interface Column extends ColumnResponseDto {}

export interface ColumnProps {
    color:string | undefined;
}

export interface ColumnContainerProps {
    column: Column;
}