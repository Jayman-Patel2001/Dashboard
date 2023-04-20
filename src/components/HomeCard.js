import React from "react";
import { Divider, Layout } from "antd";
import "../styles/HomeCard.css";
import Mcard from "./Mcard";
import styled from "@emotion/styled";
import Data from './Data';
import initialDetailState from "./RealData";
import { initialOverviewState } from "./RealData";

const { Content } = Layout;

const HomeCard = () => {
  const Heading = styled.div``;
  
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
          gridTemplateColumns: "25vw 25vw 25vw",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {/* {Data.map((e) => {
          return (
            <Mcard
              id={e.Id}
              Mname={e.MachineName}
              Pcount={e.Pcount}
              Trate={e.Trate}
              Arate={e.Arate}
            />
          );
        })} */}
        {/* {initialDetailState.map((e)=>{
          return (<Mcard id={e.machineID}
            Mname={e.machineName}
            Pcount={69}
            Trate={96}
            Arate={100}
          />)
        })} */}
        {initialOverviewState.map((e)=>{
          return (<Mcard id={e.id}
            Mname={e.day.machineName}
            Tcount={e.day.targetPercent}
            Trate={e.day.reqRate}
            Arate={e.day.actRate}
            Pcount={e.day.actProdCount}
            Pname={e.day.productName}
            Atime={e.day.activeTime}
          />)
        })}
      </Content>
    </Layout>
  );
};

export default HomeCard;
