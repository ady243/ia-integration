import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Button } from 'react-bootstrap';

import "./SearchBar.css";

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(`/api/suggestions?search=${encodeURIComponent(value)}`)
      .then((response) => response.json())
      .then((json) => {
        setResults(json.recipes);
      })
      .catch((error) => {
        console.error('Error fetching recipes:', error);
        setResults([]); // Assurez-vous de gérer les erreurs de manière appropriée
      });
  };
  
  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(input);
  };
  
  return (
    < >
    <div style={{ display: "flex"}}>
    <form onSubmit={handleSubmit} className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Rechercher une recette..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
     
    </form>
    <div className="SearchBar-submission" style={{ marginLeft:'20px'}}>
        <Button type="submit" variant="outline-info" style={{ display: "flex", background: "#201f2c", border: "1px solid transparent", color: "#fff" }}>
          <span>Rechercher</span>
        </Button>
      </div>
    </div>

    </>
   
  );
};

export default SearchBar;
