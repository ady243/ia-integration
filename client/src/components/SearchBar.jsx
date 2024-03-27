/* eslint-disable react/prop-types */
// import React, { useState } from 'react';
// import { Button, FormControl, InputGroup } from 'react-bootstrap';

// const SearchBar = ({ onSearch, setSearchCount }) => {
//   const [query, setQuery] = useState('');
//   const [suggestions, setSuggestions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const handleChange = async (e) => {
//     const value = e.target.value;
//     setQuery(value);

//     if (value.trim() === '') {
//       setSuggestions([]);
//       return;
//     }

//     setLoading(true);

//     try {
//       const response = await fetch(`/api/recipes/suggestions?query=${encodeURIComponent(value)}`);
//       const data = await response.json();
//       setSuggestions(data.suggestions);
//     } catch (error) {
//       console.error('Error fetching suggestions:', error);
//     }

//     setLoading(false);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     onSearch(query);

//     // Faites une requête pour obtenir le nombre de résultats de recherche
//     const response = await fetch(`/api/recipes/suggestions?search=${encodeURIComponent(query)}`);
//     const data = await response.json();
//     setSearchCount(data.count);
//   };

//   const searchmarge = {
//     marginLeft: '20px',
//   };

//   const marginghaut = {
//     paddingTop: '10px'
//   };

//   return (
//     <form onSubmit={handleSubmit} id="SearchBar-form" className="marginghaut " style={marginghaut}>
//       <div style={{ display: "flex" }}>
//         <div className="SearchBar-inputContainer">
//           <InputGroup>
//             <FormControl
//               type="text"
//               name="searchName"
//               id="searchName"
//               value={query}
//               placeholder="Rechercher une recette..."
//               onChange={handleChange}
//               className="SearchBar-input"
//             />
//           </InputGroup>
//         </div>
//         <div className="SearchBar-submission " style={searchmarge}>
//           <Button type="submit" variant="outline-info"
//             style={{ display: "flex", background: "#201f2c", border: "1px solid transparent", color: "#fff" }} >
//             <span>Rechercher</span>
//           </Button>
//         </div>
//       </div>
//       <ul>
//         {loading && <li>Loading...</li>}
//         {suggestions.map((suggestion, index) => (
//           <li key={index} onClick={() => setQuery(suggestion)}>
//             {suggestion}
//           </li>
//         ))}
//       </ul>
//     </form>
//   );
// };

// export default SearchBar;

// import { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import { Button, FormControl, InputGroup } from 'react-bootstrap';

// import "./SearchBar.css";


// const SearchBar = ({ setResults }) => {
//   const [input, setInput] = useState("");

//   const fetchData = (value) => {
//     fetch(`/api/recipes/suggestions?search=${encodeURIComponent(value)}`)
//       .then((response) => response.json())
//       .then((json) => {
//         const results = json.recipes.filter((recipe) => {
//           return (
//             value &&
//             recipe &&
//             recipe.name.toLowerCase().includes(value) &&
//             recipe.description.toLowerCase().includes(value)
//           );
//         });
//         setResults(results);
//       })
//       .catch((error) => {
//         console.error('Error fetching recipes:', error);
//         setResults([]); // Assurez-vous de gérer les erreurs de manière appropriée
//       });
//   };
  
//   const handleChange = (value) => {
//     setInput(value);
//     fetchData(value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setResults(input);
//   };
  
//   return (
    
//     <form onSubmit={handleSubmit} className="input-wrapper"> 
//     <FaSearch id="search-icon" />
//     <input
//       placeholder="Rechercher une recette..."
//       value={input}
//       onChange={(e) => handleChange(e.target.value)}
//     />
//     <div className="SearchBar-submission">
//       <Button type="submit" variant="outline-info" style={{ display: "flex", background: "#201f2c", border: "1px solid transparent", color: "#fff" }}>
//         <span>Rechercher</span>
//       </Button>
//     </div>
//   </form>
//      );
// };
// export default SearchBar;




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
    <form onSubmit={handleSubmit} className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Rechercher une recette..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      <div className="SearchBar-submission">
        <Button type="submit" variant="outline-info" style={{ display: "flex", background: "#201f2c", border: "1px solid transparent", color: "#fff" }}>
          <span>Rechercher</span>
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
