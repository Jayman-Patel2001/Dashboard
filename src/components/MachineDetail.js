import React from "react";
import { Layout } from "antd";
import AreaG from "./AreaG";
import LineG from "./LineG";
import Performance from "./Performance";
import Overview from "./Overview";
import { useParams } from "react-router-dom";
import "../styles/MachineDetail.css";
import initialDetailState from "./RealData";

const { Content } = Layout;

const MachineDetail = () => {
  const { machineId } = useParams();
  const item = initialDetailState.find(obj => obj.machineID === machineId);

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
        }}
      >
        <h1 className="title">{item.machineName}</h1>
        <div className="container">
          <div className="areaContainer">
            <AreaG data={item.count.day} />
            <span className="areaGName">Production Unit Per </span>
          </div>
          <div className="lineContainer">
            <LineG />
            <span className="lineGName">Required Rate vs Task Rate</span>
          </div>
        </div>
        <Performance />
        <Overview />
      </Content>
    </Layout>
  );
};

export default MachineDetail;
