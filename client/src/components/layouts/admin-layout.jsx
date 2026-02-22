import { NavLink, Outlet } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdContactPage } from "react-icons/md";
import { RiCustomerServiceFill } from "react-icons/ri";


export const AdminLayout = () => {
    return <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/admin/users"><FaUser />users</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/contacts"><MdContactPage />contacts</NavLink>
                        </li>
                        <li>
                           <NavLink to="/admin/services"><RiCustomerServiceFill />services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin/users"><IoHome />Home</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet />
    </>
}
