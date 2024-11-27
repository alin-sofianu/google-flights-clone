import React from 'react';
import { Box } from '@mui/material';

const SwapArrowsIcon = ({ sx = {} }) => {
  return (
    <Box
      component="svg"
      sx={{ width: 20, height: 20, ...sx }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      focusable="false"
    >
      <g>
        <rect fill="none" height="24" width="24" x="0"></rect>
      </g>
      <g>
        <g>
          <polygon fill="currentColor" points="8.41,12.41 7,11 2,16 7,21 8.41,19.59 5.83,17 21,17 21,15 5.83,15"></polygon>
          <polygon fill="currentColor" points="15.59,11.59 17,13 22,8 17,3 15.59,4.41 18.17,7 3,7 3,9 18.17,9"></polygon>
        </g>
      </g>
    </Box>
  );
};

export default SwapArrowsIcon;
