import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-item">
                <i className="icon compass-icon"></i>
                <span>Discover</span>
            </div>
            <div className="navbar-item">
                <i className="icon globe-icon"></i>
                <span>Exhibitions</span>
            </div>
            <div className="navbar-item">
                <i className="icon map-icon"></i>
                <span>Map</span>
            </div>
            <div className="navbar-item">
                <i className="icon calendar-icon"></i>
                <span>Schedule</span>
            </div>
        </nav>
    );
};

export default Navbar;