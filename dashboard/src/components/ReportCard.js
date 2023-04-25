import styled from "@emotion/styled";
import React from "react";
import { mobile } from "./Responsive";

const ReportCard = (props) => {
  let RunStatus = "Running";
  {
    if (props.Run === 0) {
      RunStatus = "Not Running";
    }
  }

  const Card = styled.div`
    height: 21em;
    width: 22vw;
    border-radius: 15px;
    box-shadow: inset 0 0 10px #000000;
    ${mobile({ width: "auto" })}

    border: 1px solid #100844;
    background-color: #100844;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    margin: 10px;
  `;
  const Heading = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin: 10px;
    text-align: center;
  `;
  const Status = styled.div`
    /* background-color: #00ffaa; */
    background-color: ${props.Run === 1 ? "#00ffaa" : "red"};
    padding: 15px;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    border-radius: 5px;
    margin: 0px 10px;
  `;
  const Parameters = styled.div`
    margin: 10px 10px;
  `;
  const Throughput = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 0px;
    font-size: 18px;
    border-radius: 3px;
    padding: 3px;
    background-color: #005580;
  `;
  const FirstPassYield = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 0px;
    font-size: 18px;
    border-radius: 3px;
    padding: 3px;
    background-color: #005580;
  `;
  const ScrapRate = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 0px;
    font-size: 18px;
    border-radius: 3px;
    padding: 3px;
    background-color: #005580;
  `;
  const OEE = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px 0px;
    font-size: 18px;
    border-radius: 3px;
    padding: 3px;
    background-color: #005580;
  `;
  const Title = styled.div`
    color: #e6f7ff;
  `;
  const Result = styled.div`
    font-weight: bold;
  `;

  return (
    <div>
      <Card>
        <Heading>{props.name}</Heading>

        <Status>{RunStatus}</Status>
        <Parameters>
          <Throughput>
            <Title>Throughput</Title>
            <Result>{Math.floor(props.Throughput)}/h</Result>
          </Throughput>
          <FirstPassYield>
            <Title>Good Pass Yield</Title>
            <Result>{(props.GPY * 100).toFixed(2)}%</Result>
          </FirstPassYield>
          <ScrapRate>
            <Title>Scrap Rate</Title>
            <Result>{(props.Scrap * 100).toFixed(2)}%</Result>
          </ScrapRate>
          <OEE>
            <Title>OEE</Title>
            <Result>{props.oee}%</Result>
          </OEE>
        </Parameters>
      </Card>
    </div>
  );
};

export default ReportCard;
