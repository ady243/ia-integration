// CustomNavbar.js
// import React, { useState } from "react";
import {
  Navbar as BootstrapNavbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import React, { useContext, useState } from "react";

const CustomNavbar = () => {
  const [searchText, setSearchText] = useState("");

  // const { currentUser } = useContext(HookContext);
  const [visible, setVisible] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      {/* Intégration du composant Sidebar */}
      <Sidebar />
      {/* Contenu principal */}
      <div style={{ flex: 1 }}>
        <BootstrapNavbar style={{ backgroundColor: "#712cf9", height: "74px" }}>
          <Nav className="mr-auto">
            {/* <Nav.Link onClick={() => handleRoute("/")} style={{  color:"white"}}>Accueil</Nav.Link>
            <Nav.Link onClick={() => handleRoute("/about")} style={{  color:"white"}}>A propos</Nav.Link> */}
          </Nav>
          <Form>
            <SearchBar />
          </Form>
        </BootstrapNavbar>
        {/* Contenu principal de votre application */}
        <div style={{ padding: "20px" }}>
          {/* Placez votre contenu principal ici */}
          <HomePage />
        </div>
      </div>
    </div>
  );
};

export default CustomNavbar;
