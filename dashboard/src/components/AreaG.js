import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";

import "../styles/AreaG.css";

const data = [
  {
    name: "Page A",
    unit: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    unit: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    unit: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    unit: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    unit: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    unit: 2390,
    pv: 3800,
    amt: 2500,
  },
];

const AreaG = () => {
  return (
    <ResponsiveContainer className="area-chart">
      <AreaChart
        className="area-chart-fig"
        data={data}
        margin={{
          top: 30,
          bottom: 20,
          right: 50,
          left: 0,
        }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="unit" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaG;
