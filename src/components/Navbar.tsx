import {useNavigate} from "react-router-dom";
import {AppBar, Box, Button, IconButton, Toolbar} from "@mui/material";
import {SatelliteAlt} from "@mui/icons-material";
import routes from "./routes";
import {MouseEvent} from "react";

const Navbar = () => {

  const navigate = useNavigate();

  const handleNavbarClick = (e: React.MouseEvent, route: string) => {
    navigate(route);
  }

  const handleLogoutClick = (e: React.MouseEvent) => {

  }

  return (
    <AppBar position="static" component="nav">
      <Toolbar>
        <IconButton size="large">
          <SatelliteAlt/>
        </IconButton>
        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>

          {routes.map((route) => (
            <Button
              sx={{my: 2, color: 'white', display: 'block'}}
              onClick={(e: React.MouseEvent) => handleNavbarClick(e, route.url)}
            >
              {route.name}
            </Button>
          ))}
          {/*  if user is signed in, render a logout button here...
                  but also, if the user is signed in, don't render the register/sign-in navbar buttons
                  and if the user is not signed in, don't render the other options? */}
        </Box>
        <Box>
          <Button variant="contained" color="success"
                  onClick={handleLogoutClick}>Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;