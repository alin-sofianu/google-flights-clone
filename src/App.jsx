import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Flights from "./pages/Flights";
import Explore from "./pages/Explore";
import Hotels from "./pages/Hotels";
import Travel from "./pages/Travel";
import VacationRentals from "./pages/VacationRentals";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/flights" replace />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/vacation-rentals" element={<VacationRentals />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
