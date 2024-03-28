import React from "react";

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between flex-wrap bg-black-1000 p-6">
      <div
        className="absolute inset-0 bg-cover bg-center w-full h-full z-0"
        style={{
          backgroundImage: "url('./public/hero-image.jpg')",
          height: "574px",
          opacity: "0.7",
        }}
      >
        {/* Image d'arrière-plan */}
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Superposition semi-transparente */}
      </div>
      <div className="z-10 text-white mx-auto">
        <form
          className="flex"
          style={{ marginTop: "284px", marginBottom: "-402px" , height: "65px", width: "405px"}}
        >
          <input
            className="bg-gray-900 rounded-l-lg py-2 px-4 w-64"
            type="text"
            placeholder="Rechercher une recette ..."
          />{" "}
          {/* Ajuster la largeur du champ de saisie (w-64 pour 16rem) */}
          <button className="bg-gray-800 rounded-r-lg py-2 px-4" type="submit">
            Rechercher
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
