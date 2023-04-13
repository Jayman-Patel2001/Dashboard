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

const data = [
  {
    name: "Jan 01",
    "Required Rate": 4000,
    "Actual Rate": 2400,
    "Standard Rate": 2600,
  },
  {
    name: "Jan 02",
    "Required Rate": 3000,
    "Actual Rate": 1398,
    "Standard Rate": 1510,
  },
  {
    name: "Jan 03",
    "Required Rate": 5000,
    "Actual Rate": 4500,
    "Standard Rate": 4690,
  },
  {
    name: "Jan 04",
    "Required Rate": 3480,
    "Actual Rate": 3308,
    "Standard Rate": 3350,
  },
  {
    name: "Jan 05",
    "Required Rate": 3890,
    "Actual Rate": 3800,
    "Standard Rate": 3850,
  },
  {
    name: "Jan 06",
    "Required Rate": 4090,
    "Actual Rate": 3800,
    "Standard Rate": 3900,
  },
];

const LineG = () => {
  return (
    <ResponsiveContainer className="line-chart" width="45%" height="30%">
      <LineChart
        data={data}
        margin={{
          top: 30,
          bottom: 20,
          right: 50,
          left: 0,
        }}
      >
        <XAxis dataKey="name"></XAxis>
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="top" height={10} />
        <Line type="monotone" dataKey="Required Rate" stroke="#82ca9d" />
        <Line
          type="monotone"
          dataKey="Actual Rate"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default LineG;
