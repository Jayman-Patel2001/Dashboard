import {
  QuestionCircleOutlined,
  HomeOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import logo from "../assests/logo.svg";
import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import "../styles/Navbar.css";

const { Sider } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Sider
        style={{
          paddingTop: "10px",
        }}
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo">
          <NavLink to="/">
            <img src={logo} alt="atom" />
          </NavLink>
        </div>
        <Menu
          className="menu"
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeOutlined className="homeIcon" />,
              label: <NavLink to="/">Home</NavLink>,
            },
            {
              key: "2",
              icon: <AuditOutlined className="reportIcon" />,
              label: <NavLink to="/report">Report</NavLink>,
            },
            {
              key: "3",
              icon: <QuestionCircleOutlined className="aboutIcon" />,
              label: <NavLink to="/about">About</NavLink>,
            },
          ]}
        />
      </Sider>
    </Layout>
  );
};

export default Navbar;
