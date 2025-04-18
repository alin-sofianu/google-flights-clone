import { CircularProgress, Box } from "@mui/material";

export default function Loading() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="8rem"
    >
      <CircularProgress color="primary" />
    </Box>
  );
}
