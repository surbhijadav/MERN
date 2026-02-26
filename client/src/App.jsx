import { Route, Routes } from 'react-router-dom';
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from './pages/Contact';
import { Service } from './pages/Service';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { Navbar } from "./components/Navbar";
import { AdminNavbar } from "./components/adminNavbar";   
import { Footer } from './components/Footer';
import { Error } from './pages/errorPage_404';
import { Logout } from './pages/Logout';
import { AdminLayout } from './components/layouts/admin-layout';
import { AdminContacts } from './pages/adminContact';
import { AdminUsers } from './pages/adminUser';

import { useAuth } from "./store/auth";   // ← Add this

const App = () => {
    const { isAdmin } = useAuth();   // ← Only need isAdmin

    return (
        <>
            {/* Conditional Navbar - This is what you wanted */}
            {isAdmin ? <AdminNavbar /> : <Navbar />}

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

            <Footer />
        </>
    );
};

export default App;