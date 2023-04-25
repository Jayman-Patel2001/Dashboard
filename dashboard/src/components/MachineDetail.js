import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import AreaG from "./AreaG";
import LineG from "./LineG";
import Performance from "./Performance";
import Overview from "./Overview";
import { useParams } from "react-router-dom";
import "../styles/MachineDetail.css";
import initialDetailState from "./RealData";

const { Content } = Layout;

const MachineDetail = ({ data }) => {
  const { machineId } = useParams();

  const item = initialDetailState.find((obj) => obj.machineID === machineId);
  const [machineItem, setMachineItem] = useState(item);

  useEffect(() => {
    if (data.length !== 0) {
      setMachineItem(data.find((obj) => obj.machineID === machineId));
    }
    console.log("Current Data", data, data.length);
    console.log("Set Data", machineItem);
  });

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
        <h1 className="title">{machineItem.machineName}</h1>
        <div className="container">
          <div className="areaContainer">
            <AreaG data={machineItem.count.day} />
            <span className="areaGName">Production Unit Per Unit Time </span>
          </div>
          <div className="lineContainer">
            <LineG data={machineItem.taktData.day} />
            <span className="lineGName">Required Rate vs Task Rate</span>
          </div>
        </div>
        <Performance data={machineItem.dayData} />
        <Overview data={machineItem.dayData} />
      </Content>
    </Layout>
  );
};

export default MachineDetail;
