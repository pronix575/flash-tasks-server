import { FC, useEffect } from "react";
import { ColumnContainerProps } from "./columnService.types";
import { Column } from "./components/Column";

export const ColumnContainer:FC<ColumnContainerProps> = ({column}) => {
  useEffect(()=>{

  }, [])

  return <Column color={column.color}/>;
};
