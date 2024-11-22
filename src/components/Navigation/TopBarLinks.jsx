import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import HouseIcon from '@mui/icons-material/House';
import LuggageIcon from '@mui/icons-material/Luggage';

const navLinks = [
  { label: 'Travel', icon: <LuggageIcon sx={{ color: '#0160EF' }} /> },
  { label: 'Explore', icon: <TravelExploreIcon sx={{ color: '#0160EF' }} /> },
  { label: 'Flights', icon: <FlightIcon sx={{ color: '#0160EF' }} /> },
  { label: 'Hotels', icon: <HotelIcon sx={{ color: '#0160EF' }} /> },
  { label: 'Vacation rentals', icon: <HouseIcon sx={{ color: '#0160EF' }} /> }
];

export default function TopAppBarLinks() {
  return (
    <Stack spacing={1} direction="row">
      {navLinks.map((link, index) => (
        <Button
          key={index}
          sx={{
            borderColor: '#dadce0',
            borderRadius: '20px',
            textTransform: 'capitalize',
            paddingY: '7px',
            '&:hover': {
              color: '#174ea6',
              backgroundColor: '#F6F9FD'
            },
          }}
          variant="outlined"
          startIcon={link.icon}
        >
          {link.label}
        </Button>
      ))}
    </Stack>
  );
}