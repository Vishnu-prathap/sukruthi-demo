import React, { useEffect, useState } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";
HC_more(Highcharts);

import exportingModule from "highcharts/modules/exporting";
exportingModule(Highcharts);

const AreaOfSpending = (props) => {
  const [data, setData] = useState([]);
  const [dataState, setDataState] = useState(false);
  useEffect(() => {
    const orgData = {
      Education: 8.8,
      "Cancer Diagnostics": 4.7,
      "Cancer Treatment": 30.6,
      "Chronic Kidney Disease": 46.1,
      Others: 5.2,
      "Admin Expenses": 4.5,
    };
    const tempData = [];
    Object.keys(orgData).map((key) => {
      tempData.push([key, orgData[key]]);
    });
    setData(tempData);
    setDataState(true);
  }, []);
  const optionsHighCharts = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Areas of Spending",
    },

    series: [
      {
        enableMouseTracking: false,

        name: "Areas of Spending",
        data: data,
      },
    ],
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.2f} %",
        },
      },
    },
    credits: {
      enabled: false,
      href: "",
      position: { align: "center", verticalAlign: "bottom" },
      style: {
        color: "#121212",
        cursor: "arrow",
        fontSize: "0.9em",
      },
      text: "As of date 25 July 2023",
    },
  };

  return dataState ? (
    <>
      <HighchartsReact highcharts={Highcharts} options={optionsHighCharts} />
      <p>As of date 25<sup>th</sup> July, 2023</p>
    </>
  ) : (
    ""
  );
};

export default AreaOfSpending;
