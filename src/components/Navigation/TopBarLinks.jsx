import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { TravelExplore, Flight, Hotel, House, Luggage } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import { NavLink } from "react-router-dom";

const navLinks = [
  { label: 'Travel', icon: <Luggage sx={{ color: '#0160EF', ml: "8px" }} />, route: "travel" },
  { label: 'Explore', icon: <TravelExplore sx={{ color: '#0160EF', ml: "8px" }} />, route: "explore" },
  { label: 'Flights', icon: <Flight sx={{ color: '#0160EF', ml: "8px" }} />, route: "flights" },
  { label: 'Hotels', icon: <Hotel sx={{ color: '#0160EF', ml: "8px" }} />, route: "hotels" },
  { label: 'Vacation rentals', icon: <House sx={{ color: '#0160EF', ml: "8px" }} />, route: "vacation-rentals" }
];

export default function TopAppBarLinks() {
  const navigate = useNavigate()

  return (
    <Stack spacing={1} direction="row">
      {navLinks.map((item, index) => (
        <NavLink
          to={`${item.route}`}
          key={index}

        >
          {({ isActive }) => (
            <Button
              sx={{
                backgroundColor: isActive ? "#e8f0fe" : "#fff",
                borderRadius: '20px',
                textTransform: 'capitalize',
                '&:hover': {
                  color: '#174ea6',
                  backgroundColor: '#F6F9FD'
                },
                outline: isActive ? null : "1px solid #dadce0",
              }}
              // variant="outlined"
              startIcon={item.icon}
              onClick={() => navigate(item.route)}
            >
              <span style={{ marginRight: "8px" }}>{item.label}</span>
            </Button>
          )}

        </NavLink>
      ))
      }
    </Stack >
  );
}