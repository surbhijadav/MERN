import { Link } from "react-router-dom";


const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">

      <h1 className="dashboard-title">Admin Dashboard</h1>

      <div className="dashboard-cards">

        <div className="card">
          <h2>Users</h2>
          <p>Manage all registered users</p>
          <Link to="/admin/users" className="btn">View Users</Link>
        </div>

        <div className="card">
          <h2>Contacts</h2>
          <p>Check user contact messages</p>
          <Link to="/admin/contacts" className="btn">View Contacts</Link>
        </div>

        <div className="card">
          <h2>Services</h2>
          <p>Manage available services</p>
          <Link to="/admin/services" className="">View Services</Link>
        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;