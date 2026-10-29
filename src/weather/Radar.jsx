import { useContext } from "react";
import { Box } from "@mui/material";
import { DataWeather } from "./context/ContextApiWeather";

export default function WeatherMap({ overlay = "rain" }) {
  const { DataApi } = useContext(DataWeather);

  const src =
    `https://embed.windy.com/embed2.html` +
    `?lat=${DataApi.lat}&lon=${DataApi.lon}&zoom=6` +
    `&level=surface&overlay=${overlay}` +
    `&product=ecmwf&menu=&message=true` +
    `&calendar=now&type=map` +
    `&metricWind=km%2Fh&metricTemp=%C2%B0C`;
  return (
    <Box
      sx={{
        opacity: ".2",
        position: "relative",
        width: "100%",
        height: {
          xs: "300px",
          md: "100%",
        },
        borderRadius: "16px",
        overflow: "hidden",
        border: "0",
      }}
      component="iframe"
      title="weather map"
      src={src}
      loading="lazy"
    />
  );
}
