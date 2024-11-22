import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import googleLogo from '../../assets/google_logo.svg';
import TopBarLinks from './TopBarLinks'

// eslint-disable-next-line react/prop-types
export default function TopAppBar({ onButtonClick }) {

  return (
    <Box sx={{ flexGrow: "1" }}>
      <AppBar position="static" elevation={0} sx={{ bgcolor: "secondary.main", borderBottom: '1px solid #DADCE0', px: '12px' }}>
        <Toolbar>
          <IconButton onClick={onButtonClick(true)}>
            <MenuIcon color='action' />
          </IconButton>
          <img src={googleLogo} alt="Icon" style={{ padding: '0 30px 0 12px' }} />
          <TopBarLinks />
        </Toolbar>
      </AppBar>
    </Box>
  );
}