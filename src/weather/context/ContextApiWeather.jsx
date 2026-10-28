import axios from "axios";
import { createContext, useEffect, useState } from "react";
export const DataWeather = createContext(null);

export default function DataWeatherProvider({ children }) {
  const [DataApi, setData] = useState(null);
  useEffect(() => {
    const controller = new AbortController();
    async function handleRequest() {
      try {
        const response = await axios.get(
          "https://api.weatherapi.com/v1/forecast.json?key=38e56d707e2349fd896200406260407&q=France&days=7",
          {
            signal: controller.signal,
          },
        );
        setData({
          city: response.data.location.name,
          country: response.data.location.country,
          last_updated: response.data.current.last_updated,
          temp: response.data.current.temp_c,
          feelslike: response.data.current.feelslike_c,
          srcIMg: response.data.current.condition.icon,
          condition: response.data.current.condition.text,
          min: response.data.forecast.forecastday[0].day.mintemp_c,
          max: response.data.forecast.forecastday[0].day.maxtemp_c,
          humidity: response.data.current.humidity,
          dewPoint: response.data.current.dewpoint_c,
          wind: response.data.current.wind_kph,
          wind_dir: response.data.current.wind_dir,
          visibility: response.data.current.vis_km,
          uv: response.data.current.uv,
          sunSet: response.data.forecast.forecastday[0].astro.sunset,
          toDayForecast: response.data.forecast.forecastday[0].hour,
          dayForecasct: response.data.forecast.forecastday,
          lat: response.data.location.lat,
          lon: response.data.location.lon,
        });
      } catch (error) {
        console.log(error);
      }
    }
    handleRequest();
    return () => {
      return controller.abort();
    };
  }, []);
  return (
    <DataWeather.Provider value={DataApi}>
      {" "}
      {DataApi ? (
        children
      ) : (
        <div style={{ color: "white", textAlign: "center" }}>Loading...</div>
      )}
    </DataWeather.Provider>
  );
}
