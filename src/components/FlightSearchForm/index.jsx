import React, { useState } from "react";
import { fetchFlightData } from "../../api/index.js";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AdvancedFilters from "./AdvancedFilters";
import { Box, Typography } from "@mui/material";
import DepartureArrivalLocation from "./DepartureArrivalLocation";
import DepartureArrivalTime from "./DepartureArrivalTime";
import FlightsResults from "../FlightsResults";
import dayjs from "dayjs";
import SearchIcon from "@mui/icons-material/Search";
import Loading from "./Loading.jsx";

const FlightSearchForm = () => {
  const [flights, setFlights] = useState([]);

  const [tripType, setTripType] = useState("round-trip");
  const [passengerCount, setPassengerCount] = useState("1");
  const [travelClass, setTravelClass] = useState("economy");

  const [departure, setDeparture] = useState({
    originSkyId: "JFK",
    originEntityId: "27537542",
    destinationName: "New York John F. Kennedy",
  });
  const [arrival, setArrival] = useState({
    destinationSkyId: "LHR",
    destinationEntityId: "27544008",
    destinationName: "London, United Kingdom",
  });

  const [dateRange, setDateRange] = React.useState([null, null]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = await fetchFlightData(queryParams);
      console.log("API Response Data:", data.data.itineraries.splice(0, 9));

      setFlights(data.data.itineraries.slice(0, 10) || []);
    } catch (err) {
      console.error("Error fetching flight data:", err.message);
      setError(err.message || "An error occurred while fetching flight data");
      setFlights([]);
    } finally {
      setLoading(false);
    }
  };

  const queryParams = {
    originSkyId: departure.skyId,
    destinationSkyId: arrival.skyId,
    originEntityId: departure.entityId,
    destinationEntityId: arrival.entityId,
    date: dateRange[0]
      ? dayjs(dateRange[0]).format("YYYY-MM-DD")
      : "2024-12-01",
    returnDate: dateRange[1]
      ? dayjs(dateRange[1]).format("YYYY-MM-DD")
      : "2024-12-15",
    cabinClass: travelClass,
    adults: parseInt(passengerCount, 10),
    currency: "USD",
    market: "en-US",
    limit: 10,
  };

  return (
    <div>
      <Paper elevation={3} sx={{ p: 2 }}>
        <AdvancedFilters
          tripType={tripType}
          setTripType={setTripType}
          passengerCount={passengerCount}
          setPassengerCount={setPassengerCount}
          travelClass={travelClass}
          setTravelClass={setTravelClass}
        />
        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <DepartureArrivalLocation
            departure={departure}
            setDeparture={setDeparture}
            arrival={arrival}
            setArrival={setArrival}
          />
          <DepartureArrivalTime
            dateRange={dateRange}
            setDateRange={setDateRange}
          />
        </Box>
        <Box sx={{ mt: 6, position: "relative" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "btnColor.main",
              position: "absolute",
              left: "50%",
              top: "-2px",
              transform: "translateX(-50%)",
              borderRadius: "20px",
            }}
            onClick={handleSubmit}
            // disabled={loading}
            startIcon={<SearchIcon sx={{ color: "white" }} />}
          >
            Explore
          </Button>
        </Box>
        {error && <Typography color="error">{error}</Typography>}
      </Paper>
      <Box sx={{ my: 2 }}>{loading && <Loading />}</Box>
      <FlightsResults flights={flights} />
    </div>
  );
};

export default FlightSearchForm;
