import { FC } from "react";
import { Wrap, DeskWrapper } from "./DesksList.styled";
import { DesksListProps } from "./DesksList.types";

export const DesksList: FC<DesksListProps> = ({ desksList, navigate }) => {
  return (
    <>
      <Wrap>
        {desksList?.items.map((item, index) => (
          <DeskWrapper
            index={index}
            onClick={() => navigate(`/Desk/${item._id}`)}
          >
            {item.name}
          </DeskWrapper>
        ))}
      </Wrap>
    </>
  );
};
