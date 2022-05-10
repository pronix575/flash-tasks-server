import { CreateDeskDto } from "../../../../../api/types";

export interface CreateDeskFormProps {
  handleSubmit: (payload: CreateDeskDto) => void;
  loading: boolean;
}
