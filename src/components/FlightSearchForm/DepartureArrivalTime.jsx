import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

export default function DepartureArrivalTime({
  dateRange,
  setDateRange,
  error = false,
}) {
  const handleDateChange = (newValue) => {
    setDateRange(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateRangePicker
        startText="Departure"
        endText="Return"
        value={dateRange}
        onChange={handleDateChange}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} sx={{ marginRight: 2 }} />
            <TextField {...endProps} />
          </>
        )}
        error={error}
        helperText={error ? "Please select valid dates" : ""}
      />
    </LocalizationProvider>
  );
}
