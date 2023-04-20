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
    &:hover {
      background-color: #0c0643;
  }
  `;
  const Bar = styled.div`
    display: flex;
    align-items: center;
    height: 20em;
    width: auto;
    border-radius: 15px;
    margin: 3px;
    background-color: #100844;
    justify-content: space-around;
  
  `;
  const Content = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 5px 2px;
  `;
  const Heading = styled.h1`
    color: hsl(240, 100%, 90%);
    display: flex;
    align-items: center;
    font-size: 40px;
    font-weight: bold;
    margin: 10px;
    
  `;
  const Reports = styled.div`
  font-size: 20px;
  `;
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
  const ProCount = styled.div`
    color: white;
    background-color: #7070db;
    padding: 5px 30px;
    border-radius: 10px;
    margin-bottom: 15px;
  
  `;
  const ProTitle = styled.div`
    margin: 10px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Divider = styled.hr`
    color: lightblue;
  `;

  const Trg = styled.div``;
  const ProdName = styled.h3``;
  const ActTime = styled.h3``;
  const Heading12 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  `;
  const Heading1 = styled.div`
  font-size:20px;
  `;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/machines/${props.id}`);
  };

  return (
    <div>
      <Card  onClick={handleClick} style={{ cursor: "pointer" }}>
      <Heading12>
          <ProdName>
        {props.Pname}
          </ProdName>
          <ActTime>
        Active Time : {props.Atime}
          </ActTime>
        </Heading12>
        <Bar>
        
        <Trg>
        
          <Progress type="circle" percent={props.Tcount} />
          <ProTitle>
            <Heading1>Target Achieved</Heading1>
          </ProTitle>
        </Trg>
          
          <Reports>
          <ProCount>
          <div style={{ color: "#ebebfa", textAlign: "center"}}>
                Production Count
              </div>

              <h3 style={{ textAlign: "center" ,fontSize:"35px"}}>{props.Pcount} nos</h3>

          </ProCount>
            <Target>
              <div style={{ color: "#e1cff2", textAlign: "center" }}>
                Task Rate
              </div>

              <h3 style={{ textAlign: "center" , fontSize:"35px" }}>{props.Trate}/s</h3>
            </Target>

            <Actual>
              <div style={{ color: "#dbe5f1", textAlign: "center" }}>
                Actual Rate
              </div>

              <h3 style={{ textAlign: "center" , fontSize:"35px" }}>{props.Arate}/s</h3>
            </Actual>
          </Reports>
        </Bar>
        <Content>
          <Heading>
            {props.Mname}
          </Heading>
          
        </Content>
      </Card>
    </div>
  );
}

export default Mcard;
