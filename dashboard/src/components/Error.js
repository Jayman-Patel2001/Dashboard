import React from "react";
import { Layout } from "antd";
import { NavLink } from "react-router-dom";
import "../styles/Error.css";

const { Content } = Layout;

const Error = () => {
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
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
            <h2>Page Not Found</h2>
          </div>
          <NavLink to="/" className="btn">
            HomePage
          </NavLink>
        </div>
      </Content>
    </Layout>
  );
};

export default Error;
