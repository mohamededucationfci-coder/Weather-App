// Hook
import { useContext } from "react";

// Component
import { DataWeather } from "./context/ContextApiWeather";
import Forecastday from "./Forecastday";

//MUI
import { Grid, Typography } from "@mui/material";

//Icon
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function TodayForecast() {
  const response = useContext(DataWeather);
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
          variant="div"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2,auto)",
            justifyContent: "space-between",
            alignItems: "center",
            textTransform: "capitalize",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "18px" },
            }}
          >
            today's forecast
          </Typography>
          <Typography
            variant="p"
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2,auto)",
              placeItems: "center",
              color: "#B9A5FF",
              fontWeight: "600",
              fontSize: { xs: "12px" },
            }}
          >
            view 24h <ChevronRightIcon />
          </Typography>
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
          {response.toDayForecast.map((hour) => {
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
