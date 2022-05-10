import { FC } from "react";
import { Wrap, DeskWrapper } from "./DesksList.styled";
import { DesksListProps } from "./DesksList.types";

export const DesksList: FC<DesksListProps> = ({ desksList }) => {
  return (
    <>
      <Wrap>
        {desksList?.items.map((item, index) => (
          <DeskWrapper index={index}>{item.name}</DeskWrapper>
        ))}
      </Wrap>
    </>
  );
};
