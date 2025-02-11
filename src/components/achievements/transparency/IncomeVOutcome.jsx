import React, { useEffect, useState } from "react";

import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import exportingModule from "highcharts/modules/exporting";
import HC_more from "highcharts/highcharts-more";

HC_more(Highcharts);
exportingModule(Highcharts);

const IncomeVOutcome = () => {
  const [data, setData] = useState([]);
  const [dataState, setDataState] = useState(false);

  useEffect(() => {
    const orgData = [
      {
        name: "Funds Received",
        y: 2902211,
        drilldown: "Funds Received",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        name: "Funds Spent",
        y: 2193616,
        drilldown: "Funds Spent",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ];

    console.log(orgData);
    setData({ datasets: orgData });
    setDataState(true);
  }, []);
  const optionsHighCharts = {
    chart: {
      type: "column",
    },
    title: {
      text: "Income v/s Outcome",
    },
    accessibility: {
      announceNewData: {
        enabled: true,
      },
    },
    xAxis: {
      type: "category",
    },
    yAxis: {
      title: {
        text: "Amount (in INR)",
      },
      minPadding: 100,
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        borderWidth: 0,
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        enableMouseTracking: false,

        name: "Income v/s Outcome",
        colorByPoint: true,
        data: data.datasets,
      },
    ],
    credits: {
      enabled: false,
      href: "",
      position: { align: "center", verticalAlign: "bottom", x: 10, y: 0 },
      style: {
        color: "#121212",
        cursor: "arrow",
        fontSize: "0.9em",
      },
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
export default IncomeVOutcome;
