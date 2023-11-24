import {Link} from "react-router-dom";
import {AppBar, Box, IconButton, Toolbar} from "@mui/material";
import {CatchingPokemon} from "@mui/icons-material";
import routes from "./routes";

const pages = ['home', 'register', 'login'];

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
                            <Link to={route.url}>{route.name}</Link>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

        </nav>
    );
}

// TODO: implement some sort of "active" navbar element?

export default Navbar;