import React from "react";
import "../styles/Overview.css";
import { Pie } from "@ant-design/plots";

const Overview = () => {
  const data = [
    {
      type: "Operation Error",
      value: 27,
    },
    {
      type: "Equipment Failures",
      value: 25,
    },
    {
      type: "Material Shortages",
      value: 18,
    },
    {
      type: "Maintenance Issues",
      value: 15,
    },
  ];

  const data1 = [
    {
      type: "Stop Loss",
      value: 37,
    },
    {
      type: "Speed Loss",
      value: 29,
    },
    {
      type: "Quality Loss",
      value: 11,
    },
    {
      type: "OEE Loss",
      value: 21,
    },
  ];

  const config = {
    appendPadding: 0,
    data,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.7,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
      {
        type: "association-tooltip",
      },
      {
        type: "association-highlight",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "white",
          fontSize: "2rem",
          letterSpacing: "1px",
        },
        content: "Downtime",
      },
    },
  };

  const config1 = {
    appendPadding: 0,
    data: data1,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.7,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
      {
        type: "association-tooltip",
      },
      {
        type: "association-highlight",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          color: "white",
          fontSize: "1.5rem",
          letterSpacing: "2px",
          lineHeight: "2rem",
        },
        content: "OEE\n Vs \nLosstime",
      },
    },
  };
  return (
    <div className="overviewContainer">
      <Pie
        style={{
          width: "35%",
        }}
        {...config}
      />
      <Pie style={{ width: "35%" }} {...config1} />
    </div>
  );
};

export default Overview;
