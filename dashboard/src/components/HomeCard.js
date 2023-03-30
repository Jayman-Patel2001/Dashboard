import React from "react";
import { Layout } from "antd";
import "../styles/HomeCard.css";

const { Content } = Layout;

const HomeCard = () => {
  return (
    <Layout className="site-layout">
      <Content
        className="content"
        style={{
          padding: "25px",
          background: "#141414",
          minHeight: 280,
          color: "white",
        }}
      >
        Cards
      </Content>
    </Layout>
  );
};

export default HomeCard;
