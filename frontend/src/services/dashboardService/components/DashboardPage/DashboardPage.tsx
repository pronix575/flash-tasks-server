import { FC } from "react";
import { Layout } from "../../../../shared/components/Layout";
import { Title } from "../../../../shared/components/Title";
import { CreateDeskContainer } from "../../../createDeskService/createDeskService.container";
import { dashboardService } from "../../dashboardService.models";
import { DesksListContainer } from "../../desksListService";
import {
  AddDeskWrapper,
  DesksWrapper,
  PlusWrapper,
  Wrap,
} from "./DashboardPage.styled";
import { DashboardPageProps } from "./DashboardPage.types";

export const DashboardPage: FC<DashboardPageProps> = ({
  handleOpeningModal,
}) => {
  const { GetDesksGate } = dashboardService.inputs;

  return (
    <>
      <GetDesksGate />
      <CreateDeskContainer />
      <Layout>
        <Wrap>
          <Title>Dashboard</Title>
          <DesksWrapper>
            <AddDeskWrapper onClick={handleOpeningModal}>
              <PlusWrapper>+</PlusWrapper>
              <span style={{ color: "white", fontSize: "1.2rem" }}>
                Add desk
              </span>
            </AddDeskWrapper>
            <DesksListContainer />
          </DesksWrapper>
        </Wrap>
      </Layout>
    </>
  );
};
