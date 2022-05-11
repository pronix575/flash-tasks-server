import { ColumnResponseDto, DeskResponseDto } from "../../api/types";


export interface Desk extends DeskResponseDto {}

export interface GetDeskProps {
  deskId?: string;

}

export interface DeskPageProps {
  desk: Desk | null;
}
