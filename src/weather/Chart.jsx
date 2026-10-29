// Hook
import { useContext } from "react";

// Component
import { DataWeather } from "./context/ContextApiWeather";

// Chart
import { AgCharts } from "ag-charts-react";
import { ModuleRegistry, AllCommunityModule } from "ag-charts-community";
import { Card } from "@mui/material";

ModuleRegistry.registerModules([AllCommunityModule]);

export default function TemperatureChart() {
  const { DataApi } = useContext(DataWeather);
  const getData = () =>
    DataApi.toDayForecast.map((hour) => ({
      month: hour.time.split(" ")[1],
      min: hour.temp_c,
    }));

  const options = {
    title: {
      text: "Average Temperatures",
      textAlign: "start",
      color: "white",
      fontWeight: "bold",
      fontSize: 18,
    },
    background: {
      fill: "#151C2E",
    },

    data: getData(),

    series: [
      {
        type: "line",
        xKey: "month",
        yKey: "min",
        interpolation: { type: "smooth" },
        stroke: "#B9A5FF",
        strokeWidth: 2,
        marker: {
          fill: "#B9A5FF",
          stroke: "#B9A5FF",
          size: 8,
        },
      },
    ],

    axes: {
      x: {
        type: "category",
        position: "bottom",
        label: {
          color: "#94A3B8",
          fontSize: 12,
          fontWeight: "normal",
        },
        line: { enabled: true, stroke: "#B9A5FF", width: 2 },
        gridLine: { enabled: false },
        tick: { enabled: false },
      },
      y: {
        type: "number",
        position: "left",
        label: {
          color: "#94A3B8",
          fontSize: 12,
          fontWeight: "normal",
        },
        line: { enabled: true, stroke: "#B9A5FF", width: 2 },
        gridLine: { enabled: false },
        tick: { enabled: false },
      },
    },
  };

  return (
    <Card
      sx={{
        boxShadow: "none",
        backgroundImage: "none",
        borderRadius: "16px",
        overflow: "hidden",
        outline: "none",
        "& canvas, & .ag-charts-wrapper, & .ag-chart-wrapper": {
          border: "none",
          outline: "none",
          boxShadow: "none",
        },
      }}
    >
      <AgCharts options={options} />
    </Card>
  );
}
