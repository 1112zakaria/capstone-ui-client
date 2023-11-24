import {Link} from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="nav">
            <Link to="/" className="site-title">
                Site name
            </Link>
            <ul>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </nav>
    );
}

// TODO: implement some sort of "active" navbar element?

export default Navbar;