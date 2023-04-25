import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import "../styles/LineG.css";

const LineG = ({ data }) => {
  let StandardData = [];
  let RequiredData = [];
  let ActualData = [];

  data.series.map((item) => {
    if (item.name === "Standard") {
      StandardData = item.data;
    } else if (item.name === "Required") {
      RequiredData = item.data;
    } else if (item.name === "Actual") {
      ActualData = item.data;
    }
  });

  const newData = data.xAxis.map((name, index) => ({
    name,
    StandardData: StandardData[index],
    RequiredData: RequiredData[index],
    ActualData: ActualData[index],
  }));

  return (
    <ResponsiveContainer className="line-chart" width="45%" height="30%">
      <LineChart
        data={newData}
        margin={{
          top: 30,
          bottom: 20,
          right: 50,
          left: 0,
        }}
      >
        {/* {console.log(newData)} */}
        <XAxis dataKey="name"></XAxis>
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={10} />
        <Line type="monotone" dataKey="StandardData" stroke="#00C7FF" />
        <Line type="monotone" dataKey="RequiredData" stroke="#82ca9d" />
        <Line
          type="monotone"
          dataKey="ActualData"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineG;
