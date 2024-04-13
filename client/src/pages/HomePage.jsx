
import ChatBot from "./ChatBotPage";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import RecipesList from "../components/RecipeList";
import RecipeForm from "../components/RecipeForm";
import { useState } from "react";
import RecipeDetails from "../components/RecipeDetails";


export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Header />
      <RecipesList searchTerm={searchTerm} />
    </div>
  );
};


export default HomePage;

