import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SwapArrowsIcon from '../ui/decorators/SwapArrowsIcon1';
import DropdownArrow from '../ui/decorators/DropdownArrow';
import RightArrow from '../ui/decorators/RightArrow';

export default function RoundTrip({ value, onChange }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (newValue) => {
    onChange(newValue);
    handleClose();
  };

  return (
    <div>
      <Button
        sx={{ textTransform: 'capitalize', fontWeight: 'normal' }}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        startIcon={value === 'round-trip' ? <SwapArrowsIcon sx={{ color: '#70757A' }} /> : <RightArrow sx={{ color: '#70757A' }} />}
        endIcon={<DropdownArrow sx={{ color: '#70757A' }} open={open} />}
      >
        {value}
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => handleMenuItemClick('round-trip')}>Round Trip</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('one-way')}>One Way</MenuItem>
      </Menu>
    </div>
  );
}
