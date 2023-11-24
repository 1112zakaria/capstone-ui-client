import {Link} from "react-router-dom";
import {AppBar, Box, Button, IconButton, Toolbar} from "@mui/material";
import {CatchingPokemon} from "@mui/icons-material";
import routes from "./routes";

const Navbar = () => {

    return (
        <nav className="nav">
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large">
                        <CatchingPokemon />
                    </IconButton>
                    <Box sx={ {flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>

                            {routes.map((route) => (
                                <Button
                                    sx={ {my: 2, color: 'white', display: 'block'} }
                                >
                                    <Link to={route.url}>{route.name}</Link>
                                </Button>
                            ))}

                    </Box>
                </Toolbar>
            </AppBar>

        </nav>
    );
}

export default Navbar;