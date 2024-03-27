// Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <aside
      className="sidebar"
      style={{
        height: "500vh",
        backgroundColor: "#f0f0f0",
        width: "30vh",
        paddingLeft: "30px",
        marginTop: "-55px",
      }}
    >
      <div>
        {/* Logo en haut */}
        <div className="sidebar-logo">
        <a href="http://localhost:5173/">
    <img
      src="../images/Food_Store_Logo-removebg-preview.png"
      alt="Logo"
      style={{ width: "250px", height: "200px", marginLeft: "-37px" }}
    />
  </a>
        </div>
        {/* Menu */}
        <ul
          className="sidebar-menu"
          style={{
            listStyle: "none",
            marginTop: " -40px",
            paddingLeft: "10px",
            color: "#5d596c"
          }}
        >
          <li className="sidebar-item" style={{ marginBottom: "50px" }}>
            <a href="#" className="sidebar-link">
              Accueil
            </a>
          </li>
         
          <li className="sidebar-item" style={{ marginBottom: "50px" }}>
            <a href="#" className="sidebar-link">
              Mes favoris
            </a>
          </li>
          <li className="sidebar-item" style={{ marginBottom: "50px" }}>
            <a href="#" className="sidebar-link">
              Se déconnecter
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
