
import { useState } from "react";
import { NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  Cctv,
  Droplets,
  ChartNoAxesCombined,
  BellRing,
  Settings,
  FileSliders,
  TriangleAlert,
  Map,
  Menu,
  X,
} from "lucide-react";

import "./Sidebar.css";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
      end: true,
    },
    {
      title: "Incidents",
      path: "/dashboard/incidents",
      icon: TriangleAlert,
    },
    {
      title: "Live Map",
      path: "/dashboard/LiveMap",
      icon: Map,
    },
    {
      title: "Camera Monitoring",
      path: "/dashboard/ai-monitoring",
      icon: Cctv,
    },
    {
      title: "Water Monitoring",
      path: "/dashboard/water-monitoring",
      icon: Droplets,
    },
    {
      title: "Analytics",
      path: "/dashboard/analytics",
      icon: ChartNoAxesCombined,
    },
    {
      title: "Notifications",
      path: "/dashboard/notifications",
      icon: BellRing,
    },
  ];

  return (
    <>
      
      <button
        type="button"
        className="sidebar-mobile-toggle"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label={isMobileOpen ? "Close sidebar" : "Open sidebar"}
        aria-expanded={isMobileOpen}
      >
        {isMobileOpen ? <X size={23} /> : <Menu size={23} />}
      </button>

      
      {isMobileOpen && (
        <div
          className="sidebar-overlay"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      <aside
        className={`issnc-sidebar
          ${isCollapsed ? "collapsed" : ""}
          ${isMobileOpen ? "mobile-open" : ""}`}
      >
       
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <FileSliders size={25} />
            {!isCollapsed && <span>ISSNC Menu</span>}
          </div>

          
          <button
            type="button"
            className="sidebar-collapse-btn"
            onClick={() => setIsCollapsed(!isCollapsed)}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <Menu size={20} /> : <X size={20} />}
          </button>
        </div>

        
        <nav className="sidebar-nav">
          <p className="sidebar-section-title">
            {!isCollapsed && "MAIN MENU"}
          </p>

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.end}
                title={isCollapsed ? item.title : ""}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
                onClick={() => setIsMobileOpen(false)}
              >
                <Icon size={20} strokeWidth={1.8} />
                {!isCollapsed && <span>{item.title}</span>}
              </NavLink>
            );
          })}
        </nav>

       
        <div className="sidebar-bottom">
          <NavLink
            to="/dashboard/settings"
            title={isCollapsed ? "Settings" : ""}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "active" : ""}`
            }
            onClick={() => setIsMobileOpen(false)}
          >
            <Settings size={20} strokeWidth={1.8} />
            {!isCollapsed && <span>Settings</span>}
          </NavLink>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
