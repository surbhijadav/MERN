import { NavLink } from "react-router-dom"
import "./Navbar.css";
export const Navbar = () => {
    return(
        <>
            <header className="container">
                <div className="logo-brand">
                    <a to="/">SubhiJadav</a>
                </div>

                <nav>
                    <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/service">Services</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    <li><NavLink to="/login">LogIn</NavLink></li>
                    <li><NavLink to="/register">SignUp</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}