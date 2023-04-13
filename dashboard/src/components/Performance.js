import React from "react";
import { Progress } from "antd";
import "../styles/Performance.css";

const data = [
  {
    factor: "Productivity",
    percentage: "86",
  },
  {
    factor: "Availability",
    percentage: "91",
  },
  {
    factor: "Quality",
    percentage: "89",
  },
  {
    factor: "OEE",
    percentage: "88",
  },
];

const Performance = () => {
  return (
    <div className="perfContainer">
      {data &&
        data.map((items, _index) => {
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
