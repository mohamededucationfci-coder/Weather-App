// MUI
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function StatisticsCard({
  id,
  title,
  icon,
  number,
  description,
}) {
  return (
    <Card
      sx={{
        background: "#151C2E",
        border: "1px solid #24304A",
        borderRadius: "16px",
        height:"100%",
        display: "grid",
        gridTemplateRows: "repeat(3,auto)",
      }}
    >
      <CardContent
        sx={{
          display: "grid",
          gap: {
            xs: "5px",
          },
        }}
      >
        <Typography
          variant="div"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2,auto)",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {" "}
          <Typography
            variant="h3"
            sx={{
              color: "#94A3B8",
              fontWeight: "500",
              textTransform: "capitalize",
              fontSize: {
                xs: "12px",
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="div"
            sx={{
              width: "28px",
              height: "28px",
              padding: "2px",
              borderRadius: "8px",
              display: "grid",
              placeItems: "center",
            }}
            className={
              title === "humidity"
                ? "humidity"
                : title === "wind"
                  ? "wind"
                  : title === "visibility"
                    ? "visibility"
                    : "uv"
            }
          >
            {icon}
          </Typography>
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "white", fontWeight: "bold", fontSize: { xs: "24px" } }}
        >
          {number}{" "}
          <Typography
            variant="span"
            sx={{
              fontWeight: "500",
              fontSize: { xs: "12px" },
              color: "#94A3B8",
            }}
          >
            {" "}
            {title === "humidity"
              ? "%"
              : title === "wind"
                ? "km/h"
                : title === "visibility"
                  ? "km"
                  : ""}
          </Typography>
        </Typography>
        <Typography
          variant="body2"
          sx={{
            textTransform: "capitalize",
            color:
              id === 1
                ? "#7DD3FC"
                : id === 2
                  ? "#B9A5FF"
                  : id === 3
                    ? "#34D399"
                    : "#FCD34D",
            fontSize: { xs: "11px" },
          }}
        >
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
