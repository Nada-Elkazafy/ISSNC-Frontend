
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <nav className="navbar navbar-expand navbar-dark issnc-navbar">
      <div className="container-fluid px-3 px-md-4">

        
        <div className="navbar-brand d-flex align-items-center gap-2 mb-0">
          <div className="issnc-logo">
            <i className="bi bi-shield-check"></i>
          </div>

          <div className="brand-info">
            <h5 className="mb-0">ISSNC</h5>
            <small>Integrated Server System for New Cities</small>
          </div>
        </div>

        
        <div className="d-flex align-items-center gap-2 gap-md-3">

          
          <div className="dropdown">
            <button
              type="button"
              className="navbar-icon-btn position-relative"
              aria-label="Notifications"
              aria-expanded={showNotifications}
              onClick={() => {
                setShowNotifications(!showNotifications);
                setShowProfile(false);
              }}
            >
              <i className="bi bi-bell"></i>
              <span className="notification-dot"></span>
            </button>

            {showNotifications && (
              <div className="navbar-dropdown notification-dropdown">
                <h6 className="dropdown-title">Notifications</h6>
                <p className="mb-0 text-muted small">
                  No new notifications.
                </p>
              </div>
            )}
          </div>

        
          <div className="dropdown">
            <button
              type="button"
              className="navbar-icon-btn"
              aria-label="User profile"
              aria-expanded={showProfile}
              onClick={() => {
                setShowProfile(!showProfile);
                setShowNotifications(false);
              }}
            >
              <i className="bi bi-person-circle"></i>
            </button>

            {showProfile && (
              <div className="navbar-dropdown profile-dropdown">
                <h6 className="dropdown-title">Administrator</h6>
                <hr />
                <button type="button" className="profile-menu-item">
                  <i className="bi bi-person me-2"></i>
                  My Profile
                </button>
                <button type="button" className="profile-menu-item">
                  <i className="bi bi-box-arrow-right me-2"></i>
                  Log Out
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
