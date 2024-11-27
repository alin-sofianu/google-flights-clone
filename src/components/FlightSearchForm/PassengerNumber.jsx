import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DropdownArrow from '../ui/decorators/DropdownArrow';
import UserIcon from '../ui/decorators/UserIcon';

export default function PassengerNumber({ value, onChange }) {
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
        endIcon={<DropdownArrow sx={{ color: 'gray' }} open={open} />}
        startIcon={<UserIcon sx={{ color: 'gray' }} />}
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
        <MenuItem onClick={() => handleMenuItemClick('1')}>1</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('2')}>2</MenuItem>
        <MenuItem onClick={() => handleMenuItemClick('3')}>3</MenuItem>
      </Menu>
    </div>
  );
}
