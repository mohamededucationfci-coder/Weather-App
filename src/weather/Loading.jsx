// MUI
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function CircularIndeterminate() {
  return (
    <Box
      sx={{
        background: "#0B1020",
        display: "grid",
        placeItems: "center",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "548488",
      }}
    >
      <CircularProgress aria-label="Loading…" sx={{ color: "#7DD3FC" }} />
    </Box>
  );
}
