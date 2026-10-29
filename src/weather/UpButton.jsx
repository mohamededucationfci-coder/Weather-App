import { Button } from "@mui/material";
import NorthIcon from "@mui/icons-material/North";

export default function UpButton() {
  function upPage() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Button
      onClick={upPage}
      aria-label="Scroll to top"
      sx={{
        display: "grid",
        placeItems: "center",
        minWidth: 0,
        width: "50px",
        height: "50px",
        position: "fixed",
        bottom: { xs: "15px", md: "25px" },
        right: { xs: "15px", md: "25px" },
        backgroundColor: "#B9A5FF",
        borderRadius: "50%",
        zIndex: 1544,
        color: "white",
        p: 0,
        transition: "0.3s ease",
        "&:hover": {
          backgroundColor: "#9D83F7",
          transform: "translateY(-4px)",
        },
      }}
    >
      <NorthIcon sx={{ fontSize: "28px" }} />{" "}
    </Button>
  );
}
