import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { airports } from "../../data/airports";

export default function DepartureArrivalLocation({
  departure,
  setDeparture,
  arrival,
  setArrival,
  errors = { departure: false, arrival: false },
}) {
  const handleDepartureChange = (event, newValue) => {
    setDeparture(newValue);
  };

  const handleArrivalChange = (event, newValue) => {
    setArrival(newValue);
  };

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      {/* Departure Field */}
      <Autocomplete
        id="departure-select"
        sx={{ width: 300 }}
        options={airports}
        value={departure.name}
        onChange={handleDepartureChange}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            {option.name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Where from?"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete
            }}
            error={errors.departure}
            helperText={
              errors.departure ? "Departure location is required" : ""
            }
          />
        )}
      />

      {/* Arrival Field */}
      <Autocomplete
        id="arrival-select"
        sx={{ width: 300 }}
        options={airports}
        value={arrival.name}
        onChange={handleArrivalChange}
        autoHighlight
        getOptionLabel={(option) => option.label}
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            {option.name}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Where to?"
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password", // disable autocomplete
            }}
            error={errors.arrival}
            helperText={errors.arrival ? "Arrival location is required" : ""}
          />
        )}
      />
    </Box>
  );
}
