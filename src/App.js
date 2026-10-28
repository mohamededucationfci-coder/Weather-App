import "./App.css";
import WeatherAPP from "./weather/WeatherAPP";
import DataWeatherProvider from "./weather/context/ContextApiWeather";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "inter",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <DataWeatherProvider>
        {" "}
        <WeatherAPP />
      </DataWeatherProvider>
    </ThemeProvider>
  );
}

export default App;
