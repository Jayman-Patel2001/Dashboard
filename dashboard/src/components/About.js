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
          background: "#141414",
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
