import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import "../styles/Report.css";
import styled from "@emotion/styled";
import ReactSpeedometer from "react-d3-speedometer";
import ReportCard from "./ReportCard";
import dataDetails from "./RealData";
import { mobile } from "./Responsive";
import { small } from "./Responsive";
import medium from "./Responsive";
const { Content } = Layout;

const Report = ({ data }) => {
  const [initialDetailState, setInitialDetailState] = useState(dataDetails);

  useEffect(() => {
    if (data.length !== 0) {
      setInitialDetailState(data);
    }
  });

  let Date = "10/04/2023";
  const totalTargetQty = initialDetailState.reduce(
    (acc, curr) => acc + parseFloat(curr.dayData.targetQty),
    0
  );

  const totalAchivedQty = initialDetailState.reduce(
    (acc, curr) => acc + parseFloat(curr.dayData.achieveQty),
    0
  );
  const totalRejectedQty = initialDetailState.reduce(
    (acc, curr) => acc + parseFloat(curr.dayData.rejectQty),
    0
  );
  const totalDuration = initialDetailState.reduce(
    (acc, curr) => acc + parseFloat(curr.dayData.duration),
    0
  );
  const totalOee = initialDetailState.reduce(
    (acc, curr) => acc + parseFloat(curr.dayData.oee * curr.dayData.duration),
    0
  );

  const Dashboard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 20px;
    height: auto;
    width: 80vw;
    border: 1px solid #021e39;
    border-radius: 20px;
    background-color: #0c0633;
    box-shadow: 5px 5px 5px #001529;
    ${mobile({ justifyContent: "center", alignItems: "center", width: "auto" })}
  `;
  const Headings = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const Head1 = styled.div`
    font-size: 25px;
  `;
  const Head2 = styled.div``;
  const ProgressBar = styled.div`
    display: flex;
    ${medium({ display: "grid", gridTemplateColumns: "auto auto" })}
    ${mobile({ display: "grid", gridTemplateColumns: "auto" })}
  `;
  const Throughput = styled.div`
    border: 1px solid #100844;
    background-color: #100844;
    width: 33vw;
    display: flex;
    flex-direction: column;
    height: 20em;
    justify-content: center;
    align-items: center;
    margin: 2px;
    ${mobile({ width: "auto" })}
  `;
  const Bar = styled.div``;
  const Result = styled.div`
    color: #8884d8;
    font-size: 25px;
    font-weight: bold;
  `;
  const Title = styled.div`
    color: white;
    font-weight: bold;
  `;
  const Reports = styled.div`
    display: grid;
    grid-template-columns: 27vw 27vw 27vw;

    ${mobile({ gridTemplateColumns: "40vw 40vw" })};
    ${small({ gridTemplateColumns: "auto" })};
  `;

  return (
    <Layout className="site-layout">
      <Content
        className="content"
        style={{
          padding: "25px",
          width: "100%",

          background: "#021e39",

          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "column",
        }}
      >
        <Dashboard>
          <Headings>
            <Head1>Daily OOE Dashboard </Head1>
            <Head2>{}</Head2>
          </Headings>
          <ProgressBar>
            <Throughput>
              <Bar>
                <ReactSpeedometer
                  height={200}
                  maxValue={Math.floor((totalTargetQty / totalDuration) * 60)}
                  value={Math.floor((totalAchivedQty / totalDuration) * 60)}
                  needleColor="white"
                  segments={5}
                />
              </Bar>
              <Result>
                {Math.floor((totalAchivedQty / totalDuration) * 60)}/h
              </Result>
              <Title>Throughput</Title>
            </Throughput>
            <Throughput>
              <Bar>
                <ReactSpeedometer
                  maxValue={100}
                  value={(
                    ((totalAchivedQty - totalRejectedQty) / totalAchivedQty) *
                    100
                  ).toFixed(2)}
                  needleColor="white"
                  segments={5}
                  height={200}
                />
              </Bar>
              <Result>
                {(
                  ((totalAchivedQty - totalRejectedQty) / totalAchivedQty) *
                  100
                ).toFixed(2)}
                %
              </Result>
              <Title>Good Pass Yield</Title>
            </Throughput>
            <Throughput>
              <Bar>
                <ReactSpeedometer
                  maxValue={100}
                  value={(totalOee / totalDuration).toFixed(2)}
                  needleColor="white"
                  segments={5}
                  height={200}
                />
              </Bar>
              <Result>{(totalOee / totalDuration).toFixed(2)}%</Result>
              <Title>OEE</Title>
            </Throughput>
            <Throughput>
              <Bar>
                <ReactSpeedometer
                  maxValue={30}
                  value={((totalRejectedQty / totalAchivedQty) * 100).toFixed(
                    2
                  )}
                  needleColor="white"
                  segments={6}
                  height={200}
                />
              </Bar>
              <Result>
                {((totalRejectedQty / totalAchivedQty) * 100).toFixed(2)}%
              </Result>
              <Title>Scrap Rate</Title>
            </Throughput>
          </ProgressBar>
        </Dashboard>

        <Reports>
          {initialDetailState.map((e) => {
            return (
              <ReportCard
                Run={e.status}
                name={e.machineName}
                Throughput={(e.dayData.achieveQty / e.dayData.duration) * 60}
                GPY={
                  (e.dayData.achieveQty - e.dayData.rejectQty) /
                  e.dayData.achieveQty
                }
                Scrap={e.dayData.rejectQty / e.dayData.achieveQty}
                oee={e.dayData.oee}
              />
            );
          })}
        </Reports>
      </Content>
    </Layout>
  );
};

export default Report;
