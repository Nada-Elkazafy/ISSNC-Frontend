import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./DashboardLayout.css";

function DashboardLayout() {
  return (
    <div className="dashboard-layout">
      {/* Top Navbar */}
      <Navbar />

      <div className="dashboard-body">
        {/* Sidebar */}
        <Sidebar />

        {/* Current Page */}
        <main className="main-content">
          <Outlet />
         
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
