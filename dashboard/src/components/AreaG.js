import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import "../styles/AreaG.css";

const AreaG = ({ data }) => {
  const newData = data.xAxis.map((name, index) => ({
    name,
    value: data.yAxis[index],
  }));
  return (
    <div>
      <ResponsiveContainer className="area-chart">
        <AreaChart
          className="area-chart-fig"
          data={newData}
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
          <Area
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaG;
