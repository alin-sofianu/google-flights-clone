import React from 'react';
import { Box } from '@mui/material';

const RightArrow = ({ sx = {} }) => {
  return (
    <Box
      component="svg"
      sx={{ width: 20, height: 20, ...sx }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      focusable="false"
      fill="currentColor"
    >
      <path d="M16.79 7.79l-1.41 1.42L17.17 11H3v2h14.17l-1.79 1.79 1.41 1.42L21 12z">
      </path>
    </Box>
  );
};

export default RightArrow;
