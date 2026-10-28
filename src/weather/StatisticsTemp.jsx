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
  const response = useContext(DataWeather);
  const visibility = Math.round(response.visibility);
  console.log(visibility);
  function getVisibilityText(visibility) {
    if (visibility >= 10) return "Clear unobstructed horizon";
    if (visibility >= 5) return "Good visibility";
    if (visibility >= 2) return "Moderate visibility";
    if (visibility >= 1) return "Poor visibility";
    return "Very poor visibility, fog likely";
  }
  console.log(response);
  const dataList = [
    {
      id: 1,
      title: "humidity",
      icon: <WaterDropOutlinedIcon />,
      number: `${Math.round(response.humidity)}`,
      description: `dew point ${Math.round(response.dewPoint)}`,
    },
    {
      id: 2,
      title: "wind",
      icon: <AirOutlinedIcon />,
      number: `${Math.round(response.wind)}`,
      description: `dir : ${response.wind_dir}`,
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
      number: `${Math.round(response.uv)}`,
      description: `Protection needed until ${response.sunSet}`,
    },
  ];
  return (
    <Grid container spacing={1}>
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
