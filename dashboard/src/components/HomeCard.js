import React from "react";
import { Divider, Layout } from "antd";
import "../styles/HomeCard.css";
import Mcard from "./Mcard";

const { Content } = Layout;

const HomeCard = ({ data }) => {
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
              id={e.id}
              Mname={e.day.machineName}
              Tcount={e.day.targetPercent}
              Trate={e.day.reqRate}
              Arate={e.day.actRate}
              Pcount={e.day.actProdCount}
              Pname={e.day.productName}
              Atime={e.day.activeTime}
            />
          );
        })}
      </Content>
    </Layout>
  );
};

export default HomeCard;
