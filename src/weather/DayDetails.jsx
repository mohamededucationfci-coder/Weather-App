// Component
import { DataWeather } from "./context/ContextApiWeather";
// State
import { useContext } from "react";

//MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

//Icon
import NorthIcon from "@mui/icons-material/North";
import SouthIcon from "@mui/icons-material/South";
import { Box } from "@mui/material";
export default function DayDetails() {
  const { DataApi } = useContext(DataWeather);

  return (
    <Card
      sx={{
        background: "#151C2E",
        border: "1px solid #24304A",
        boxShadow: "0 0 45px -10px rgba(251,191,36,0.45)",
        borderRadius: "16px",
        height: "calc(100% - 16px)",
        padding: {
          xs: "8px ",
        },
      }}
    >
      <CardContent
        sx={{
          position: "relative",
          display: "grid",
          gap: {
            xs: "16px",
          },
        }}
      >
        <Typography
          variant="div"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2,auto)",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: {
                xs: "24px",
              },
            }}
          >
            {DataApi.city}, {DataApi.country}
          </Typography>
          <Typography variant="div">
            <Typography
              variant="span"
              sx={{
                background: "#1B2438",
                border: "1px solid #324163",
                borderRadius: "20px",
                textTransform: "capitalize",
                fontWeight: "500",
                color: "#CBD5E1",
                fontSize: {
                  xs: "12px",
                },
                padding: {
                  xs: "4px 10px",
                },
              }}
            >
              updated {DataApi.last_updated.split(" ")[1]}
            </Typography>
          </Typography>
        </Typography>
        <Typography
          variant="div"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2,auto)",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="div">
            <Typography
              variant="div"
              sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: {
                  xs: "52px",
                },
              }}
            >
              {" "}
              {Math.round(DataApi.temp)}{" "}
              <Typography
                variant="span"
                sx={{
                  color: "#B9A5FF",
                  fontWeight: "400",
                }}
              >
                ° c
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                background: "rgba(251,191,36,0.15)",
                border: "1px solid rgba(251,191,36,0.3)",
                borderRadius: "16px",
                fontWeight: "600",
                color: "#FCD34D",
                width: "fit-content",
                padding: {
                  xs: "2px 10px",
                },
                fontSize: {
                  xs: "12px",
                },
              }}
            >
              {DataApi.condition}
            </Typography>
          </Typography>
          <Typography
            variant="div"
            sx={{
              position: "absolute",
              bottom: { xs: "25px", md: "-50px" },
              right: "-60px",
            }}
          >
            <Box
              component="img"
              src={DataApi.srcIMg}
              alt="Weather condition"
              loading="lazy"
              sx={{
                width: { xs: "200px", md: "350px" },
                height: { xs: "200px", md: "350px" },
                objectFit: "contain",
              }}
            />
          </Typography>
        </Typography>
        <Typography
          variant="div"
          sx={{ width: "100%", height: "2px", background: "#24304A" }}
        ></Typography>

        <Typography
          variant="div"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2,auto)",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="div">
            <Typography
              variant="div"
              sx={{
                color: "#94A3B8",
                textTransform: "capitalize",
                fontSize: {
                  xs: "12px",
                },
              }}
            >
              feels like{" "}
              <Typography
                variant="span"
                sx={{ color: "white", fontSize: "14px", fontWeight: "600" }}
              >
                {Math.round(DataApi.feelslike)}°C
              </Typography>
            </Typography>
          </Typography>
          <Typography
            variant="div"
            sx={{
              display: "grid ",
              gridTemplateColumns: "repeat(2,auto)",
              gap: "10px",
            }}
          >
            <Typography
              variant="div"
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2,auto)",
                alignItems: "center",
                fontWeight: "600",
                gap: "5px",
                fontSize: {
                  xs: "14px",
                },
              }}
            >
              <NorthIcon
                sx={{
                  color: "#FB7185",

                  fontSize: {
                    xs: "15px",
                  },
                }}
              />
              <Typography
                variant="span"
                sx={{ color: "white", textTransform: "capitalize" }}
              >
                h : {Math.round(DataApi.max)}°
              </Typography>
            </Typography>
            <Typography
              variant="div"
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2,auto)",
                alignItems: "center",
                fontWeight: "600",
                gap: "5px",
                fontSize: {
                  xs: "14px",
                },
              }}
            >
              <SouthIcon
                sx={{
                  color: "#7DD3FC",
                  fontSize: {
                    xs: "15px",
                  },
                }}
              />
              <Typography
                variant="span"
                sx={{ color: "white", textTransform: "capitalize" }}
              >
                l : {Math.round(DataApi.min)}°
              </Typography>
            </Typography>
          </Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}
