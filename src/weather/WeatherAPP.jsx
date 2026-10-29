// Component
import Header from "./Header";
import DayDetails from "./DayDetails";
import StatisticsTemp from "./StatisticsTemp";
import TodayForecast from "./Today'sForecast";
import DayForecast from "./DayForecast";
import Footer from "./Footer";
import WeatherMap from "./Radar";

// MUI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import UpButton from "./UpButton";

export default function WeatherAPP() {
  return (
    <Container maxWidth="lg" sx={{ paddingY: { xs: "20px" } }}>
    <UpButton/>
      <Grid container spacing={3}>
        <Grid size={12}>
          <Header />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <DayDetails />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <StatisticsTemp />
        </Grid>
        <Grid size={12}>
          <TodayForecast />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <DayForecast />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <WeatherMap />
        </Grid>
        <Grid size={12}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}
