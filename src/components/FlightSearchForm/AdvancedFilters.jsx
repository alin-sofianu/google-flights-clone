import React from 'react'
import TravelClass from './TravelClass'
import PassengerNumber from './PassengerNumber'
import RoundTrip from './RoundTrip'
import { Box } from '@mui/material'

function AdvancedFilters({ tripType, setTripType, passengerCount, setPassengerCount, travelClass, setTravelClass }) {

  return (
    <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
      <RoundTrip value={tripType} onChange={setTripType} />
      <PassengerNumber value={passengerCount} onChange={setPassengerCount} />
      <TravelClass value={travelClass} onChange={setTravelClass} />
    </Box>
  )
}

export default AdvancedFilters