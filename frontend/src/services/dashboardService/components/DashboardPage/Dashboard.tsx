import { FC, useState } from "react";
import { Layout } from "../../../../shared/components/Layout";
import { Modal } from "../../../../shared/components/Modal";
import { Title } from "../../../../shared/components/Title";
import { AddDeskWrapper, PlusWrapper, Wrap } from "./Dashboard.styled";

export const Dashboard: FC = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Modal
        show={show}
        title={"Create new desk"}
        onHide={() => setShow((prev) => !prev)}
      >dfjkldfnglkdfnbdf</Modal>
      <Layout>
        <Wrap>
          <Title>Dashboard</Title>
          <AddDeskWrapper onClick={() => setShow(true)}>
            <PlusWrapper>+</PlusWrapper>
            <span style={{ color: "white", fontSize: "1.2rem" }}>Add desk</span>
          </AddDeskWrapper>
        </Wrap>
      </Layout>
    </>
  );
};
