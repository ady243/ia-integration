import React, { useState } from 'react';
import { Navbar as BootstrapNavbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}  >
      <input
      style={{  height: "40px" , width: "300px" , marginLeft: "20px" ,  borderRadius: "8%"}} 
        type="text"
        placeholder="Rechercher une recette..."
        value={query}
        onChange={handleChange}
      />
      <button type="submit" variant="outline-info"   >ok</button>
    </form>

   

  );
};

export default SearchBar;
