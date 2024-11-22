import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { TravelExplore, Flight, Hotel, House, Luggage } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const navLinks = [
  { label: 'Travel', icon: <Luggage sx={{ color: '#0160EF' }} />, route: "travel" },
  { label: 'Explore', icon: <TravelExplore sx={{ color: '#0160EF' }} />, route: "explore" },
  { label: 'Flights', icon: <Flight sx={{ color: '#0160EF' }} />, route: "flights" },
  { label: 'Hotels', icon: <Hotel sx={{ color: '#0160EF' }} />, route: "hotels" },
  { label: 'Vacation rentals', icon: <House sx={{ color: '#0160EF' }} />, route: "vacation-rentals" }
];

export default function TopAppBarLinks() {
  const navigate = useNavigate()

  return (
    <Stack spacing={1} direction="row">
      {navLinks.map((item, index) => (
        <Link to={`${item.route}`} key={index} >
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
            startIcon={item.icon}
            onClick={() => navigate(item.route)}
          >
            {item.label}
          </Button>
        </Link>
      ))
      }
    </Stack >
  );
}