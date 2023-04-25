import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import logo from "../assests/aboutImg.png";
// import "../styles/About.css";
import { NavLink } from "react-router-dom";
const { Content } = Layout;

const About = () => {
  return (
    <Layout className="site-layout">
      <Content
        className="content"
        style={{
          padding: "5rem",
          width: "100%",
          height: "100vh",
          background: "#021e39",
          minHeight: 280,
          color: "white",
        }}
      >
        <h1>Will Create This Page Later On...</h1>
      </Content>
    </Layout>
  );
};

export default About;
