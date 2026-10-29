// Hook
import { useContext } from "react";

// Component
import { DataWeather } from "./context/ContextApiWeather";
import StatisticsCard from "./StatisticsCard";

//MUI
import Grid from "@mui/material/Grid";

//Icon
import WaterDropOutlinedIcon from "@mui/icons-material/WaterDropOutlined";
import AirOutlinedIcon from "@mui/icons-material/AirOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
export default function StatisticsTemp() {
  const { DataApi } = useContext(DataWeather);
  const visibility = Math.round(DataApi.visibility);

  function getVisibilityText(visibility) {
    if (visibility >= 10) return "Clear unobstructed horizon";
    if (visibility >= 5) return "Good visibility";
    if (visibility >= 2) return "Moderate visibility";
    if (visibility >= 1) return "Poor visibility";
    return "Very poor visibility, fog likely";
  }
  const dataList = [
    {
      id: 1,
      title: "humidity",
      icon: <WaterDropOutlinedIcon />,
      number: `${Math.round(DataApi.humidity)}`,
      description: `dew point ${Math.round(DataApi.dewPoint)}`,
    },
    {
      id: 2,
      title: "wind",
      icon: <AirOutlinedIcon />,
      number: `${Math.round(DataApi.wind)}`,
      description: `dir : ${DataApi.wind_dir}`,
    },
    {
      id: 3,
      title: "visibility",
      icon: <VisibilityOutlinedIcon />,
      number: `${visibility}`,
      description: getVisibilityText(visibility),
    },
    {
      id: 4,
      title: `UV Index`,
      icon: <WbSunnyOutlinedIcon />,
      number: `${Math.round(DataApi.uv)}`,
      description: `Protection needed until ${DataApi.sunSet}`,
    },
  ];
  return (
    <Grid
      container
      spacing={1}
      sx={{
        gridTemplateColumns: "repeat(2,1fr)",
      }}
    >
      {dataList.map((item) => {
        return (
          <Grid key={item.id} size={6}>
            {" "}
            <StatisticsCard
              id={item.id}
              title={item.title}
              icon={item.icon}
              number={item.number}
              description={item.description}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
