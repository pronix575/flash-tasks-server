import { FC } from "react";
import { Layout } from "../../../../shared/components/Layout";
import { Title } from "../../../../shared/components/Title";
import { ColumnContainer } from "../../../columnService/columnService.container";
import { DeskPageProps } from "../../deskService.types";
import { ColumnsWrapper, DeskWrapper, Wrap } from "./DeskPage.styled";

export const DeskPage: FC<DeskPageProps> = ({ desk }) => {
  return (
    <>
      <Layout>
        <Wrap>
          <DeskWrapper>
            <div style={{ marginLeft: "80px" }}>
              <Title>{desk?.name}</Title>
            </div>
            <ColumnsWrapper>
              {desk?.columns.map((column) => (
                <ColumnContainer column={column}/>
              ))}
            </ColumnsWrapper>
          </DeskWrapper>
        </Wrap>
      </Layout>
    </>
  );
};
