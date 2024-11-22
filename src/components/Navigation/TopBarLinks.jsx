import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import FlightIcon from '@mui/icons-material/Flight';
import HotelIcon from '@mui/icons-material/Hotel';
import HouseIcon from '@mui/icons-material/House';
import LuggageIcon from '@mui/icons-material/Luggage';
import Typography from '@mui/material/Typography';

export default function TopAppBarLinks() {
  return (
    <Stack spacing={1} direction="row">
      <Button
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
        startIcon={<LuggageIcon sx={{ color: '#0160EF' }} />}
      >
        Travel
      </Button>
      <Button
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
        startIcon={<TravelExploreIcon sx={{ color: '#0160EF' }} />}
      >
        Explore
      </Button>
      <Button
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
        startIcon={<FlightIcon sx={{ color: '#0160EF' }} />}
      >
        Flights
      </Button>
      <Button
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
        startIcon={<HotelIcon sx={{ color: '#0160EF' }} />}
      >
        Hotels
      </Button>
      <Button
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
        startIcon={<HouseIcon sx={{ color: '#0160EF' }} />}
      >
        Vacation rentals
      </Button>
    </Stack>
  );
}