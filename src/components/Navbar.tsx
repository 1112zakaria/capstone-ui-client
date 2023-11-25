import {useNavigate} from "react-router-dom";
import {AppBar, Box, Button, IconButton, Toolbar} from "@mui/material";
import {SatelliteAlt} from "@mui/icons-material";
import routes from "./routes";

const Navbar = () => {

    const navigate = useNavigate();

    const handleNavbarClick = (e: React.MouseEvent, route: string) => {
        navigate(route);
    }

    return (
        <nav className="nav">
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large">
                        <SatelliteAlt />
                    </IconButton>
                    <Box sx={ {flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>

                            {routes.map((route) => (
                                <Button
                                    sx={ {my: 2, color: 'white', display: 'block'} }
                                    onClick={(e) => handleNavbarClick(e, route.url)}
                                >
                                    {route.name}
                                </Button>
                            ))}

                    </Box>
                </Toolbar>
            </AppBar>

        </nav>
    );
}

export default Navbar;