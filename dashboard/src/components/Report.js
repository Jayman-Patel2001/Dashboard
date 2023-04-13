import React from "react";
import { Layout } from "antd";
import "../styles/Report.css";

const { Content } = Layout;

const Report = () => {
  return (
    <Layout className="site-layout">
      <Content
        className="content"
        style={{
          padding: "25px",
          width: "100%",
          height: "100vh",
          display: "flex",
          background: "#021e39",
          minHeight: 280,
          color: "white",
        }}
      >
        Report
      </Content>
    </Layout>
  );
};

export default Report;
