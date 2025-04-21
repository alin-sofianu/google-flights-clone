import React from "react";
import { Typography } from "@mui/material";

function Travel() {
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
        Travel - Page
      </Typography>
    </div>
  );
}

export default Travel;
