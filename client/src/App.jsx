import { Route, Routes } from 'react-router-dom';
import { lazy,Suspense } from "react";
import { ClipLoader } from "react-spinners";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Service = lazy(() => import("./pages/Service"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Logout = lazy(() => import("./pages/Logout"));
const Error = lazy(() => import("./pages/errorPage_404"));

const AdminUsers = lazy(() => import("./pages/adminUser"));
const AdminContacts = lazy(() => import("./pages/adminContact"));

import { AdminLayout } from './components/layouts/admin-layout';
import { Footer } from './components/Footer';
import { Navbar } from "./components/Navbar";
import { AdminNavbar } from "./components/adminNavbar";   

import { useAuth } from "./store/auth";   // ← Add this

const App = () => {
    const { isAdmin } = useAuth();   // ← Only need isAdmin

    return (
        <>
            {/* Conditional Navbar - This is what you wanted */}
            {isAdmin ? <AdminNavbar /> : <Navbar />}

            <Suspense fallback={<ClipLoader size={50} />}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Service />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<Error />} />

                {/* Admin Routes */}
                <Route path='/admin' element={<AdminLayout />}>
                    <Route path='users' element={<AdminUsers />} />
                    <Route path='contacts' element={<AdminContacts />} />
                    {/* Add services route here later if needed */}
                </Route>
            </Routes>
            </Suspense>

            <Footer />
        </>
    );
};

export default App;