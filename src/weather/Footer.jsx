// MUI
import { Grid, Typography } from "@mui/material";

//Icon
import CloudQueueIcon from "@mui/icons-material/CloudQueue";

export default function Footer() {
  const dateNow = new Date();
  return (
    <Grid
      container
      sx={{
        background: "transparent",
        border: "none",
        display: "grid",
        placeItems: "center",
        gap: "15px",
      }}
    >
      <Grid sx={{ display: "grid", gridTemplateColumns: "1fr", gap: "10px" ,justifyItems:"center"}}>
        <Typography
          variant="div"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2,auto)",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <CloudQueueIcon sx={{ color: "#B9A5FF" }} />

          <Typography
            variant="h3"
            sx={{
              color: "white",
              fontWeight: "bold",
              fontSize: { xs: "16px" },
            }}
          >
            SkyPlus
          </Typography>
        </Typography>
        <Typography variant="div" sx={{ color: "#94A3B8", fontSize:{xs:"11px"}}}>
          © {dateNow.getFullYear()} SkyPulse Weather Systems. All rights
          reserved.
        </Typography>
        <Typography variant="div" sx={{ color: "#94A3B8" ,fontSize:{xs:"11px"}}}>
          made with love by mohamed shehta
        </Typography>
      </Grid>
    </Grid>
  );
}
