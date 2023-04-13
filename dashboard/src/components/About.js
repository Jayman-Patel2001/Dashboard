import React from "react";
import { Layout } from "antd";
import "../styles/About.css";

const { Content } = Layout;

const About = () => {
  return (
    <Layout className="site-layout">
      <Content
        className="content"
        style={{
          padding: "25px",
          width: "100%",
          height: "100vh",
          background: "#021e39",
          minHeight: 280,
          color: "white",
        }}
      >
        About
      </Content>
    </Layout>
  );
};

export default About;
