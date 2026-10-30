// MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {
  InputBase,
  Button,
  Paper,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

// Icon
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import SearchIcon from "@mui/icons-material/Search";

// Component
import { DataWeather } from "./context/ContextApiWeather";

// Hook
import { useContext, useState, useEffect } from "react";

export default function Header() {
  const [valueInput, setValueInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { setCityName } = useContext(DataWeather);

  function handleCity(event) {
    setValueInput(event.target.value);
    setShowSuggestions(true);
  }

  function selectCity(city) {
    setValueInput(city.name);
    setCityName(city.name);
    setShowSuggestions(false);
    setSuggestions([]);
  }

  useEffect(() => {
    const q = valueInput.trim();
    if (q.length < 2 || !showSuggestions) {
      setSuggestions([]);
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=5&language=en`,
          { signal: controller.signal },
        );
        const data = await res.json();
        setSuggestions(data.results || []);
      } catch (e) {
        if (e.name !== "AbortError") console.error(e);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [valueInput, showSuggestions]);

  return (
    <Box>
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid
          sx={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            alignItems: "center",
            gap: { xs: "8px" },
          }}
        >
          <Typography
            variant="div"
            sx={{
              width: { xs: "36px" },
              height: { xs: "36px" },
              border: "1px solid rgba(185,165,255,0.3)",
              borderRadius: "12px",
              backgroundColor: "rgba(185,165,255,0.15)",
              color: "#B9A5FF",
              display: { xs: "none", md: "grid" },
              placeItems: "center",
              p: {
                xs: "5px",
                md: "8px",
                lg: "10px",
              },
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
              fontSize: { xs: "20px" },
            }}
          >
            Sky
            <Typography variant="span" sx={{ color: "#B9A5FF" }}>
              Pulse
            </Typography>
          </Typography>
        </Grid>

        <Grid>
          <form
            style={{ position: "relative" }}
            onSubmit={(event) => {
              event.preventDefault();
              if (valueInput !== "") {
                setCityName(valueInput);
                setShowSuggestions(false);
                document.activeElement?.blur();
              }
            }}
          >
            <InputBase
              value={valueInput}
              onChange={handleCity}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              placeholder="Search city..."
              startAdornment={
                <Button
                  type="submit"
                  sx={{
                    margin: "3px 6px 3px 0",
                    background: "#151C2E",
                    border: "transparent",
                    display: "grid",
                    placeContent: "center",
                    height: "30px",
                  }}
                >
                  <SearchIcon sx={{ color: "#B9A5FF" }} />
                </Button>
              }
              sx={{
                width: { xs: "200px", sm: "350px", md: "500px" },
                p: {
                  xs: "5px",
                  md: "8px",
                  lg: "10px",
                },
                border: "1px solid rgba(185,165,255,0.3)",
                borderRadius: "12px",
                backgroundColor: "rgba(185,165,255,0.15)",
                color: "white",
              }}
            />

            {showSuggestions && suggestions.length > 0 && (
              <Paper
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  right: 0,
                  mt: "6px",
                  zIndex: 20,
                  color: "white",
                  backgroundColor: "#151C2E",
                  border: "1px solid rgba(185,165,255,0.3)",
                  borderRadius: "12px",
                  overflow: "hidden",
                }}
              >
                <List disablePadding>
                  {suggestions.map((city) => (
                    <ListItemButton
                      key={city.id}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        selectCity(city);
                      }}
                      sx={{
                        color: "white",
                        "&:hover": {
                          backgroundColor: "rgba(185,165,255,0.15)",
                        },
                      }}
                    >
                      <ListItemText
                        primary={city.name}
                        secondary={[city.admin1, city.country]
                          .filter(Boolean)
                          .join(", ")}
                        sx={{
                          "& .MuiListItemText-primary": { color: "#fff" },
                          "& .MuiListItemText-secondary": {
                            color: "#ffffff93",
                          },
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Paper>
            )}
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
