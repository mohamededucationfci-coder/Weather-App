import { Grid, Typography } from "@mui/material";

//Icon
import WaterDropIcon from "@mui/icons-material/WaterDrop";
export default function Forecastday({ time, temp, srcIMG, humidity }) {
  const hour = `${new Date().getHours()}:00`;

  console.log(hour.length);
  return (
    <Grid
      container
      sx={{
        background: time === (hour.length===4?`0${hour}`:hour) ? "#B9A5FF" : "#151C2E",
        border: time === hour ? "" : "1px solid #24304A",
        borderRadius: "16px",
        padding: "10px",
        display: "grid",
        gridTemplateColumns: "1fr",
        justifyItems: "center",
        minWidth: "90px",
        gap: "5px",
      }}
    >
      <Grid>
        <Typography
          variant="span"
          sx={{
            color: time === (hour.length===4?`0${hour}`:hour) ?"black" : "#94A3B8",
            fontWeight: "bold",
            fontSize: { xs: "12px" },
          }}
        >
          {time}
        </Typography>
      </Grid>
      <Grid>
        <Typography variant="div">
          <img
            srcSet={srcIMG}
            src={srcIMG}
            alt="img state weather"
            loading="lazy"
          />
        </Typography>
      </Grid>
      <Grid>
        <Typography
          variant="h4"
          sx={{
            color: time === (hour.length===4?`0${hour}`:hour) ? "black" : "white",
            fontWeight: "bold",
            fontSize: { xs: "14px" },
          }}
        >
          {temp}
        </Typography>
      </Grid>
      <Grid
        sx={{
          color:time === (hour.length===4?`0${hour}`:hour) ?"black" : "#94A3B8",
          fontWeight: "bold",
          fontSize: { xs: "10px" },
          display: "grid",
          gridTemplateColumns: "repeat(2,auto)",
          gap: "2px",
        }}
      >
        {humidity} %
        <WaterDropIcon
          sx={{
            color: time === (hour.length===4?`0${hour}`:hour) ?"black" : "#B9A5FF",
            fontSize: { xs: "12px" },
          }}
        />
      </Grid>
    </Grid>
  );
}
