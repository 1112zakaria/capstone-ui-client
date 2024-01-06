import {useNavigate} from "react-router-dom";
import {AppBar, Box, Button, IconButton, Toolbar} from "@mui/material";
import {SatelliteAlt} from "@mui/icons-material";
import routes, { RouteDefinition } from "./routes";
import {MouseEvent} from "react";
import {
  useContext
} from "react";
import { AuthContext } from "../providers/AuthProvider";
import { allowRoute } from "./ProtectedRoute";

const Navbar = () => {

  const navigate = useNavigate();
  const {authToken, logoutUser} = useContext(AuthContext);
  const isLoggedIn = authToken != null;

  const handleNavbarClick = (e: React.MouseEvent, route: string) => {
    navigate(route);
  }

  const handleLogoutClick = (e: React.MouseEvent) => {
    logoutUser();
  }

  return (
    <AppBar position="static" component="nav">
      <Toolbar>
        <IconButton size="large">
          <SatelliteAlt/>
        </IconButton>
        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>

          {routes.map((route) => {
            if (allowRoute(isLoggedIn, route)) {
              return (
                <Button
                  sx={{my: 2, color: 'white', display: 'block'}}
                  onClick={(e: React.MouseEvent) => handleNavbarClick(e, route.url)}
                >
                  {route.name}
                </Button>
              );
            }
          })}
          {/*  if user is signed in, render a logout button here...
                  but also, if the user is signed in, don't render the register/sign-in navbar buttons
                  and if the user is not signed in, don't render the other options? */}
        </Box>
        <Box>
          {isLoggedIn && <Button variant="contained" color="success"
                  onClick={handleLogoutClick}>Logout</Button>}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;