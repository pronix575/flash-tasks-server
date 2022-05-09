import { FC } from "react";
import { Layout } from "../../../../shared/components/Layout";
import { Title } from "../../../../shared/components/Title";
import { CreateDeskContainer } from "../../../createDeskService/createDeskService.container";
import { AddDeskWrapper, PlusWrapper, Wrap } from "./DashboardPage.styled";
import { DashboardPageProps } from "./DashboardPage.types";


export const DashboardPage: FC<DashboardPageProps> = ({ handleOpeningModal }) => {

  return (
    <>
      <CreateDeskContainer/>
      <Layout>
        <Wrap>
          <Title>Dashboard</Title>
          <AddDeskWrapper onClick={handleOpeningModal}>
            <PlusWrapper>+</PlusWrapper>
            <span style={{ color: "white", fontSize: "1.2rem" }}>Add desk</span>
          </AddDeskWrapper>
        </Wrap>
      </Layout>
    </>
  );
};
