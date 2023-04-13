import React from "react";
import { Divider, Layout } from "antd";
import "../styles/HomeCard.css";
import Mcard from "./Mcard";
import styled from "@emotion/styled";

const { Content } = Layout;

const HomeCard = () => {
  const Heading = styled.div``;
  const data = [
    {
      Id: 1,
      MachineName: "Machine1",
      Pcount: 75,
      Trate: 96,
      Arate: 69,
    },
    {
      Id: 2,
      MachineName: "Machine2",
      Pcount: 69,
      Trate: 77,
      Arate: 79,
    },
    {
      Id: 3,
      MachineName: "Machine3",
      Pcount: 96,
      Trate: 89,
      Arate: 100,
    },
    {
      Id: 4,
      MachineName: "Machine4",
      Pcount: 88,
      Trate: 89,
      Arate: 89,
    },
    {
      Id: 5,
      MachineName: "Machine5",
      Pcount: 99,
      Trate: 95,
      Arate: 91,
    },
    {
      Id: 6,
      MachineName: "Machine6",
      Pcount: 82,
      Trate: 76,
      Arate: 71,
    },
  ];
  return (
    <Layout className="site-layout">
      <Content
        className="content"
        style={{
          padding: "25px",
          width: "100%",
          height: "auto",
          background: "#021e39",
          minHeight: 280,
          color: "white",
          gridTemplateColumns: "25vw 25vw 25vw",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {data.map((e) => {
          return (
            <Mcard
              id={e.Id}
              Mname={e.MachineName}
              Pcount={e.Pcount}
              Trate={e.Trate}
              Arate={e.Arate}
            />
          );
        })}
      </Content>
    </Layout>
  );
};

export default HomeCard;
