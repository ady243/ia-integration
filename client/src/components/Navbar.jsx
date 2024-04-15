import React, { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <>
       <nav className="relative flex items-center justify-between flex-wrap bg-black-1000 p-6 -mt-12">
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-full z-0"
        style={{
          backgroundImage: "url('./public/hero-image.jpg')",
          height: "523px",
          opacity: "0.7",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      </div>
      <div className="z-10 text-white mx-auto" >
        <form
          className="flex"
          onSubmit={handleSubmit}
          style={{
            marginTop: "284px",
            marginBottom: "-402px",
            height: "65px",
            width: "405px",
          }}
        >
          <input
            className="bg-gray-900 rounded-l-lg py-2 px-4 w-4/5 h-12"
            type="text"
            placeholder="Rechercher une recette ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <button className="bg-[#0ab3b3] rounded-r-lg py-2 px-4 h-12" type="submit">
            Rechercher
          </button>
        </form>
      </div>
    </nav></>
 
  );
};

export default Navbar;
