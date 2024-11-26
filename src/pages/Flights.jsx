import React from 'react'
import { Typography } from '@mui/material'
import flightsIcon from '../assets/flights_light.svg';
import { Container, Box } from '@mui/material';
import FlightSearchForm from '../components/FlightSearchForm';
function Flights() {
  return (
    <>
      <Container >
        <img src={flightsIcon} height={'auto'} />
        <Box sx={{ position: "relative" }}>
          <Typography variant="h1" sx={{ width: "100%", color: "primary.main", position: 'absolute', top: "-1.2em", textAlign: "center" }}>Flights</Typography>
        </Box>
        <FlightSearchForm />
      </Container>
    </>
  )
}

export default Flights