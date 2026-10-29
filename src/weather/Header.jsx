// MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { InputBase } from "@mui/material";

// Icon
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import SearchIcon from "@mui/icons-material/Search";

// Component
import { DataWeather } from "./context/ContextApiWeather";

// Hook
import { useContext } from "react";

export default function Header() {
  const { cityName, setCityName } = useContext(DataWeather);
  function handleCity(event) {
    setCityName(event.target.value);
  }
  return (
    <Box>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2,auto)",
            alignItems: "center",
            gap: { xs: "8px" },
          }}
        >
          <Typography
            variant="div"
            sx={{
              width: {
                xs: "36px",
              },
              height: {
                xs: "36px",
              },
              border: "1px solid rgba(185,165,255,0.3)",
              borderRadius: "12px",
              backgroundColor: "rgba(185,165,255,0.15)",
              color: "#B9A5FF",
              display: { xs: "none", md: "grid" },
              placeItems: "center",
            }}
          >
            <CloudQueueIcon />
          </Typography>
          <Typography
            variant="h1"
            gutterBottom
            sx={{
              color: "white",
              fontWeight: "bold",
              textTransform: "capitalize",
              fontSize: {
                xs: "20px",
              },
            }}
          >
            Sky
            <Typography variant="span" sx={{ color: "#B9A5FF" }}>
              Pulse
            </Typography>
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2,auto)",
            gap: { xs: "8px" },
          }}
        >
          <form>
            {" "}
            <InputBase
              placeholder="Search city..."
              startAdornment={<SearchIcon sx={{ color: "#B9A5FF", mr: 1 }} />}
              sx={{
                height: "36px",
                width: {
                  xs: "180px",
                },
                px: "10px",
                border: "1px solid rgba(185,165,255,0.3)",
                borderRadius: "12px",
                backgroundColor: "rgba(185,165,255,0.15)",
                color: "white",
              }}
            />
          </form>

          <Typography
            variant="span"
            sx={{
              width: {
                xs: "36px",
              },
              height: {
                xs: "36px",
              },
              border: "1px solid rgba(185,165,255,0.3)",
              borderRadius: "12px",
              backgroundColor: "rgba(185,165,255,0.15)",
              color: "#B9A5FF",
              display: "grid",
              placeItems: "center",
              fontWeight: "bold",
              textTransform: "uppercase",
              fontSize: { xs: "12px" },
            }}
          >
            en
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
