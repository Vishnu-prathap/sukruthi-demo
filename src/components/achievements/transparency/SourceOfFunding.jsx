import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import Highcharts from "highcharts/highstock";

import HighchartsReact from "highcharts-react-official";
import exportingModule from "highcharts/modules/exporting";
import HC_more from "highcharts/highcharts-more";

HC_more(Highcharts);
exportingModule(Highcharts);

const data = [
  ["Individuals Contributions", 1],
  ["Founders' Corpus", 99],
];

const SourceOfFunding = (props) => {
  const [data, setData] = useState([]);
  const [dataState, setDataState] = useState(false);
  useEffect(() => {
    const orgData = {
      "Individual Donors' contributions": 25,
      "Founders' contributions": 75,
    };
    const tempData = [];
    Object.keys(orgData).map((key) => {
      tempData.push([key, orgData[key]]);
    });
    console.log(tempData);
    setData(tempData);
    setDataState(true);
  }, []);

  const optionsHighCharts = {
    chart: {
      type: "pie",
    },
    title: {
      text: "Sources of Funding",
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45,
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.percentage:.2f} %",
        },
      },
    },
    series: [
      {
        enableMouseTracking: false,

        name: "Sources of Funding",
        minPointSize: 10,
        innerSize: "50%",
        zMin: 0,
        data: data.map((item) => ({
          name: item[0],
          y: item[1],
          z: 10,
        })),
      },
    ],
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

export default SourceOfFunding;
