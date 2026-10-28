import { Box, Grid, Typography } from "@mui/material";

export default function DayForecastCard({
  id,
  title_p1,
  title_p2,
  icon,
  state,
  min,
  percentage,
  max,
}) {
  const day = new Date();
  console.log("Dc", day.getDate());
  return (
    <Grid
      container
      sx={{
        gridTemplateColumns: "auto auto auto 1fr auto",
        justifyContent: "space-between",
        alignItems: "center",
        paddingY: { xs: "10px" },
        borderTop: id === 0 ? "" : "1px solid #24304A",
      }}
    >
      <Grid>
        <Typography
          variant="h5"
          sx={{ color: "white", fontWeight: "500", fontSize: { xs: "14px" } }}
        >
          {day.getDate() == title_p2 ? `Today` : `${title_p1} / ${title_p2}`}
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2,auto)",
          alignItems: "center",
        }}
      >
        <img width={"30px"} src={icon} alt="" />
        <Typography
          variant="body1"
          sx={{
            textTransform: "capitalize",
            color: "#CBD5E1",
            fontSize: { xs: "12px" },
          }}
        >
          {state}
        </Typography>
      </Grid>
      <Grid>
        <Typography
          variant="span"
          sx={{ color: "#94A3B8", fontSize: { xs: "12px" } }}
        >
          {min}°
        </Typography>
      </Grid>
      <Grid>
        <Box
          variant="div"
          sx={{
            height: "5px",
            width: "100px",
            background: "#1B2438",
            borderRadius: "16px",
            position: "relative",
          }}
        >
          <Box
            variant="div"
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              width: `${percentage}%`,
              height: "100%",
              backgroundImage:
                "linear-gradient(to right, #7DD3FC, #FCD34D, #FB7185)",
              borderRadius: "16px",
            }}
          ></Box>
        </Box>
      </Grid>
      <Grid>
        <Typography
          variant="span"
          sx={{ color: "#94A3B8", fontSize: { xs: "12px" } }}
        >
          {max}°
        </Typography>
      </Grid>
    </Grid>
  );
}
