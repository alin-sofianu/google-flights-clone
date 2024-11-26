import React from 'react';
import Paper from '@mui/material/Paper';
import AdvancedFilters from './AdvancedFilters';

const FlightSearchForm = () => {
  return (
    <Paper elevation={3}>
      <AdvancedFilters />
    </Paper>
  );
};

export default FlightSearchForm;