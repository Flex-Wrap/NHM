import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import IconDiscover from "../assets/icon-discover.svg?react";
import IconExhibitions from "../assets/icon-exhibitions.svg?react";
import IconMap from "../assets/icon-map.svg?react";
import IconSchedule from "../assets/icon-events.svg?react";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => `navbar-item ${isActive ? "active" : ""}`}>
                <IconDiscover className="navbar-icon" />
                <span>Discover</span>
            </NavLink>

            <NavLink to="/exhibitions" className={({ isActive }) => `navbar-item ${isActive ? "active" : ""}`}>
                <IconExhibitions className="navbar-icon" />
                <span>Exhibitions</span>
            </NavLink>

            <NavLink to="/map" className={({ isActive }) => `navbar-item ${isActive ? "active" : ""}`}>
                <IconMap className="navbar-icon" />
                <span>Map</span>
            </NavLink>

            <NavLink to="/schedule" className={({ isActive }) => `navbar-item ${isActive ? "active" : ""}`}>
                <IconSchedule className="navbar-icon" />
                <span>Schedule</span>
            </NavLink>
        </nav>
    );
};

export default Navbar;
