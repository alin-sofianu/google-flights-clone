import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import TravelExplore from "@mui/icons-material/TravelExplore";
import LuggageIcon from "@mui/icons-material/Luggage";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import Hotel from "@mui/icons-material/Hotel";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Language, CreditCard, EditLocation } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { styled } from "@mui/material/styles";

const CustomDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    marginTop: "64px",
  },
}));

const vacationObjectives = [
  { name: "Travel", icon: <LuggageIcon />, route: "travel" },
  { name: "Explore", icon: <TravelExplore />, route: "explore" },
  { name: "Flights", icon: <AirplanemodeActiveIcon />, route: "flights" },
  { name: "Hotel", icon: <Hotel />, route: "hotels" },
  {
    name: "Vacation rentals",
    icon: <TravelExplore />,
    route: "vacation-rentals",
  },
];
const vacationSettings = [
  { name: "Tracked flight prices", icon: <TrendingUpIcon /> },
  { name: "Change language", icon: <Language /> },
  { name: "Change currency", icon: <CreditCard /> },
  { name: "Change location", icon: <EditLocation /> },
];

function SideBar({ open, toggleDrawer }) {
  const navigate = useNavigate();

  const DrawerList = (
    <Box
      sx={{ width: 250, zIndex: -5 }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <List>
        {vacationObjectives.map((item) => (
          <NavLink
            to={`${item.route}`}
            key={item.name}
            style={{ textDecoration: "none" }}
          >
            {({ isActive }) => (
              <ListItem sx={{}} disablePadding>
                <ListItemButton
                  sx={{
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px",
                    marginRight: "12px",
                    backgroundColor: isActive ? "#E8F0FE" : "#fff",
                  }}
                  onClick={() => navigate(item.route)}
                >
                  <ListItemIcon
                    sx={{
                      color: isActive ? "#4285F4" : null,
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    sx={{
                      "& .MuiListItemText-primary": {
                        fontFamily:
                          '"Google Sans Display", "Roboto", "Arial", sans-serif',
                        color: isActive ? "#4285F4" : "#3c4043",
                        fontSize: "14px",
                        fontWeight: 500,
                        letterSpacing: "0.25px",
                        lineHeight: "20px",
                        margin: "4px 0px",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            )}
          </NavLink>
        ))}
      </List>
      <Divider />
      <List>
        {vacationSettings.map((setting, index) => (
          <ListItem key={setting.name} disablePadding>
            <ListItemButton
              sx={{
                borderTopRightRadius: "50px",
                borderBottomRightRadius: "50px",
                marginRight: "12px",
              }}
            >
              <ListItemIcon>{setting.icon}</ListItemIcon>
              <ListItemText
                primary={setting.name}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontFamily:
                      '"Google Sans Display", "Roboto", "Arial", sans-serif',
                    color: "#3c4043",
                    fontSize: "14px",
                    fontWeight: 500,
                    letterSpacing: "0.25px",
                    lineHeight: "20px",
                    margin: "4px 0px",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <CustomDrawer
      elevation={2}
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
        },
        "& .MuiModal-backdrop": {
          backgroundColor: "transparent",
        },
      }}
    >
      {DrawerList}
    </CustomDrawer>
  );
}

export default SideBar;
