import { NavLink } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdContactPage } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";

export const AdminNavbar = () => {
    return (
        <header>
            <div className="container">
                <div className="logo-brand">
                    <NavLink to="/">SubhiJadav</NavLink>
                </div>
                <nav>
                    <ul>
                        <li><NavLink to="/admin"><IoHome /> Home</NavLink></li>
                        <li><NavLink to="/admin/users"><FaUser /> users</NavLink></li>
                        <li><NavLink to="/admin/contacts"><MdContactPage /> contacts</NavLink></li>
                        <li><NavLink to="/admin/services"><RiCustomerServiceFill /> services</NavLink></li>
                        <li><NavLink to="/logout">Logout</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};