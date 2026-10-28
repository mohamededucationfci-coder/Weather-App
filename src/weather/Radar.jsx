import { useContext } from "react";
import { Box } from "@mui/material";
import { DataWeather } from "./context/ContextApiWeather";

export default function WeatherMap({ overlay = "rain" }) {
  const response = useContext(DataWeather);
  if (!response) return null;

  const src =
    `https://embed.windy.com/embed2.html` +
    `?lat=${response.lat}&lon=${response.lon}&zoom=6` +
    `&level=surface&overlay=${overlay}` +
    `&product=ecmwf&menu=&message=true&marker=true` +
    `&calendar=now&type=map&location=coordinates&detail=&metricWind=km%2Fh&metricTemp=%C2%B0C`;

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "350px",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <Box
        component="iframe"
        title="weather map"
        src={src}
        loading="lazy"
        sx={{ width: "100%", height: "100%", border: 0 }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#081531be",
          zIndex: 1,
          color: "white",
        }}
      />
    </Box>
  );
}
