import { FC } from "react";
import { Layout } from "../../../../shared/components/Layout";
import { Modal } from "../../../../shared/components/Modal";
import { Title } from "../../../../shared/components/Title";
import { AddDeskWrapper, PlusWrapper, Wrap } from "./Dashboard.styled";

export const Dashboard: FC = () => {
  return (
    <>
      <Modal show={true} />
      <Layout>
        <Wrap>
          <Title>Dashboard</Title>
          <AddDeskWrapper>
            <PlusWrapper>+</PlusWrapper>
            <span style={{ color: "white", fontSize: "1.2rem" }}>Add desk</span>
          </AddDeskWrapper>
        </Wrap>
      </Layout>
    </>
  );
};
