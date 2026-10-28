// Component
import Header from "./Header";
import DayDetails from "./DayDetails";
import StatisticsTemp from "./StatisticsTemp";
import TodayForecast from "./Today'sForecast";
// MUI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import DayForecast from "./DayForecast";
import Footer from "./Footer";
import WeatherMap from "./Radar";

export default function WeatherAPP() {
  return (
    <Container maxWidth="md" sx={{ paddingY: { xs: "20px" } }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Header />
        </Grid>
        <Grid size={12}>
          <DayDetails />
        </Grid>
        <Grid size={12}>
          <StatisticsTemp />
        </Grid>
        <Grid size={12}>
          <TodayForecast />
        </Grid>
        <Grid size={12}>
          <DayForecast />
        </Grid>
        <Grid size={12}>
          <WeatherMap />
        </Grid>
        <Grid size={12}>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}
