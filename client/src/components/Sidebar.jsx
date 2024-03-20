import React from "react";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <aside className="sidebar">
    <div className="sidebar-header">
        <h3>Sidebar Title</h3>
    </div>
    <ul className="sidebar-menu">
        <li className="sidebar-item">
            <a href="#" className="sidebar-link">Dashboard</a>
        </li>
        <li className="sidebar-item">
            <a href="#" className="sidebar-link">Messages</a>
        </li>
        <li className="sidebar-item">
            <a href="#" className="sidebar-link">Settings</a>
        </li>
        <li className="sidebar-item">
            <a href="#" className="sidebar-link">Logout</a>
        </li>
    </ul>
</aside>
);
};

export default Sidebar;
