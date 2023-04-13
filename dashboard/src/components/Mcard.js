import styled from "@emotion/styled";
import React from "react";
// import ProgressBar from './ProgressBar';
import { Progress, Space } from "antd";
import "../styles/Mcard.css";
import { useNavigate } from "react-router-dom";

function Mcard(props) {
  let MachineName = "Machine 1";
  let TaskRate = "96";
  let ActualRate = "69";

  const Card = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
    margin: 20px;
    height: 30em;
    width: 40em;
    border: 1px solid #021e39;
    border-radius: 20px;
    background-color: #0c0633;
    box-shadow: 5px 5px 5px #001529;
  `;
  const Bar = styled.div`
    display: flex;
    align-items: center;
    height: 20em;
    width: auto;
    border-radius: 15px;
    margin: 3px;
    background-color: #100844;
    flex-direction: column;
  `;
  const Content = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 5px 2px;
  `;
  const Heading = styled.h1`
    color: white;
    display: flex;
    align-items: center;
  `;
  const Reports = styled.div``;
  const Target = styled.div`
    color: white;
    background-color: #9639af;
    padding: 5px 30px;
    border-radius: 10px;
    margin-bottom: 15px;
  `;
  const Actual = styled.div`
    color: white;
    background-color: #2dc3ed;
    padding: 5px 30px;
    border-radius: 10px;
    margin-bottom: 15px;
  `;
  const ProTitle = styled.div`
    margin: 10px 0px;
  `;
  const Divider = styled.hr`
    color: lightblue;
  `;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/machines/${props.id}`);
  };

  return (
    <div>
      <Card>
        <Bar>
          <ProTitle>
            <Heading>Production Cost</Heading>
          </ProTitle>
          <Progress type="circle" percent={props.Pcount} />
        </Bar>
        <Content>
          <Heading onClick={handleClick} style={{ cursor: "pointer" }}>
            {props.Mname}
          </Heading>
          <Reports>
            <Target>
              <div style={{ color: "#e1cff2", textAlign: "center" }}>
                Task Rate
              </div>

              <h3 style={{ textAlign: "center" }}>{props.Trate}%</h3>
            </Target>

            <Actual>
              <div style={{ color: "#dbe5f1", textAlign: "center" }}>
                Actual Rate
              </div>

              <h3 style={{ textAlign: "center" }}>{props.Arate}%</h3>
            </Actual>
          </Reports>
        </Content>
      </Card>
    </div>
  );
}

export default Mcard;
