import React from 'react';
import { Box } from '@mui/material';

const SwapArrowsIcon2 = ({ sx = {} }) => {
  return (
    <Box
      component="svg"
      sx={{ width: 24, height: 24, ...sx }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      focusable="false"
    >
      <path
        d="M17 4l-1.41 1.41L18.17 8H11v2h7.17l-2.58 2.59L17 14l5-5-5-5zM7 20l1.41-1.41L5.83 16H13v-2H5.83l2.58-2.59L7 10l-5 5 5 5z"
        fill="currentColor"
      />
    </Box>
  );
};

export default SwapArrowsIcon2;
