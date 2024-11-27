import React from 'react';
import { Box } from '@mui/material';

const DropdownArrow = ({ sx = {}, open }) => {
  return (
    <Box
      component="svg"
      sx={{ width: 10, height: 5, ...sx }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="7 10 10 5"
      focusable="false"
    >
      {open ?
        <polygon
          sx={{ fillRule: 'evenodd' }}
          points="7 15 12 10 17 15"
          fill="currentColor"
        ></polygon>
        :
        <polygon
          sx={{ fillRule: 'evenodd' }}
          points="7 10 12 15 17 10"
          fill="currentColor"
        ></polygon>
      }
    </Box>

  );
};

export default DropdownArrow;
