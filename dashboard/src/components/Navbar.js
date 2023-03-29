import {
  QuestionCircleOutlined,
  HomeOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import logo from "../assests/logo.svg";
import { Layout, Menu } from "antd";
import React, { useState } from "react";
import "../styles/Navbar.css";

const { Sider, Content } = Layout;

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
          <img src={logo} alt="atom" />
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
              label: "Home",
            },
            {
              key: "2",
              icon: <AuditOutlined className="reportIcon" />,
              label: "Report",
            },
            {
              key: "3",
              icon: <QuestionCircleOutlined className="aboutIcon" />,
              label: "About",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        {/* <Header></Header> */}
        <Content
          className="content"
          style={{
            padding: "25px",
            background: "#141414",
            minHeight: 280,
            color: "white",
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default Navbar;
