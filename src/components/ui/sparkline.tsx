import React, { useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsExporting from "highcharts/modules/exporting";

interface Props {
  data: number[];
  title: string;
}

const SparklineChart: React.FC<Props> = ({ data, title }) => {
  const chartComponentRef = useRef<HighchartsReact.RefObject>(null);
  if (typeof Highcharts === "object") {
    HighchartsExporting(Highcharts);
  }

  const options: Highcharts.Options = {
    subtitle: { text: title, style: { color: "white" } },
    chart: {
      type: "line",
      width: 500,
      height: 100,
      backgroundColor: "rgb(57,65,84)",
    },
    exporting: { enabled: false },
    title: {
      text: "",
    },
    xAxis: {
      visible: false,
    },
    yAxis: {
      visible: false,
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        data,
        type: "line",
      },
    ],
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
        states: {
          hover: {
            enabled: false,
          },
        },
      },
    },
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
      ref={chartComponentRef}
    />
  );
};

export default SparklineChart;
