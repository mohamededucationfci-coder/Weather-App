// Hook
import { useContext } from "react";

// Component
import { DataWeather } from "./context/ContextApiWeather";
import Forecastday from "./Forecastday";

//MUI
import { Grid, Typography } from "@mui/material";

export default function TodayForecast() {
  const { DataApi } = useContext(DataWeather);
  return (
    <Grid
      container
      sx={{
        gap: {
          xs: "12px",
        },
      }}
    >
      <Grid size={12}>
        <Typography
          variant="h2"
          sx={{
            textTransform: "capitalize",
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "18px" },
          }}
        >
          today's forecast
        </Typography>
      </Grid>
      <Grid size={12} sx={{ gap: { xs: "10px" } }}>
        <Typography
          variant="div"
          className="scrolling"
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            overflow: "auto",
            gap: "12px",
          }}
        >
          {DataApi.toDayForecast.map((hour) => {
            return (
              <Forecastday
                key={hour.time}
                time={hour.time.split(" ")[1]}
                temp={hour.temp_c}
                srcIMG={`https:${hour.condition.icon}`}
                humidity={hour.humidity}
              />
            );
          })}
        </Typography>
      </Grid>
    </Grid>
  );
}
