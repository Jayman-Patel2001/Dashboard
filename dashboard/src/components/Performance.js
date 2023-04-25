import React from "react";
import { Progress } from "antd";
import "../styles/Performance.css";

const Performance = ({ data }) => {
  const newData = [
    {
      factor: "Productivity",
      percentage: data.prodPer,
    },
    {
      factor: "Availability",
      percentage: data.availPer,
    },
    {
      factor: "Quality",
      percentage: data.qlt,
    },
    {
      factor: "OEE",
      percentage: data.oee,
    },
  ];
  return (
    <div className="perfContainer">
      {newData &&
        newData.map((items, _index) => {
          return (
            <div className="perfRev">
              <Progress
                type="circle"
                className="perfCircle"
                percent={items.percentage}
                strokeColor={{
                  "0%": "#108ee9",
                  "100%": "#87d068",
                }}
              />
              <h1 className="perfFact">{items.factor}</h1>
            </div>
          );
        })}
    </div>
  );
};

export default Performance;
