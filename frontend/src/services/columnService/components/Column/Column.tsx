import { FC } from "react";
import { ColumnProps } from "../../columnService.types";
import { Wrap } from "./Column.styled";

export const Column: FC<ColumnProps> = ({color}) => {
  return <Wrap color={color}></Wrap>
};
