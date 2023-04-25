import React, { useState, useEffect } from "react";
import "../styles/Overview.css";
import { Pie } from "@ant-design/plots";
import initialDetailState from "./RealData";

const Overview = ({ data }) => {
  const totalLoss = data.targetQty - data.achieveQty;

  const data1 = [
    {
      type: "Achieved Percentage",
      value: Math.floor((data.achieveQty / data.targetQty) * 100),
    },
    {
      type: "Reject Percentage",
      value: Math.floor((data.rejectQty / data.achieveQty) * 100),
    },
    {
      type: "Loss Percentages",
      value: Math.floor((totalLoss / data.targetQty) * 100),
    },
    {
      type: "Production Percentage",
      value: data.prodPer,
    },
  ];

  const data2 = [
    {
      type: "Productivity Loss",
      value: 100 - data.prodPer,
    },
    {
      type: "Availability Loss",
      value: 100 - data.availPer,
    },
    {
      type: "Quality Loss",
      value: 100 - data.qlt,
    },
    {
      type: "OEE Loss",
      value: 100 - data.oee,
    },
  ];

  const config = {
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
          fontSize: "2rem",
          letterSpacing: "1px",
        },
        content: "Machine\n Performance",
      },
    },
  };

  const config1 = {
    appendPadding: 0,
    data: data2,
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
