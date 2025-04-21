import React from "react";
import { Typography } from "@mui/material";

function Explore() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <Typography variant="h3" sx={{ color: "primary.blue" }}>
        Explore - Page
      </Typography>
    </div>
  );
}

export default Explore;
