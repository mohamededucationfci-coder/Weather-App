// Component
import { DataWeather } from "./context/ContextApiWeather";
import DayForecastCard from "./DayForecastCard";
// Hook
import { useContext } from "react";

//MUI
import { Grid, Typography } from "@mui/material";

export default function DayForecast() {
  const response = useContext(DataWeather);
  return (
    <Grid
      container
      sx={{
        background: "#151C2E",
        border: "1px solid #24304A",
        borderRadius: "16px",
        gap: {
          xs: "16px",
        },
        padding: { xs: "10px" },
      }}
    >
      <Grid
        size={12}
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2,auto)",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textTransform: "capitalize",
            color: "white",
            fontWeight: "bold",
            fontSize: { xs: "18px" },
          }}
        >
          {response.dayForecasct.length}-day forecast
        </Typography>
        <Typography
          variant="span"
          sx={{
            textTransform: "capitalize",
            color: "#7DD3FC",
            fontWeight: "600",
            fontSize: { xs: "12px" },
          }}
        >
          {response.city} , {response.country}
        </Typography>
      </Grid>
      <Grid size={12} sx={{}}>
        {response.dayForecasct.map((day) => {
          console.log();
          return (
            <DayForecastCard
              key={response.dayForecasct.indexOf(day)}
              id={response.dayForecasct.indexOf(day)}
              title_p1={day.date.split("-")[1]}
              title_p2={day.date.split("-")[2]}
              icon={day.day.condition.icon}
              state={day.day.condition.text}
              percentage={
                (Number(day.day.avgtemp_c) /
                  (Number(day.day.mintemp_c) + Number(day.day.maxtemp_c))) *
                100
              }
              min={Math.round(day.day.mintemp_c)}
              max={Math.round(day.day.maxtemp_c)}
            />
          );
        })}
      </Grid>
    </Grid>
  );
}
