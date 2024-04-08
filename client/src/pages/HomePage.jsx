import ChatBot from "./ChatBotPage";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import RecipesList from "../components/RecipeList";
import { RecipeProvider } from "../hook/RecipesProvider";
import RecipeForm from "../components/RecipeForm";
import { useState } from "react";

export const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (formData) => {
    console.log("Données du formulaire soumises :", formData);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Header />
      <RecipeProvider>
        <RecipesList searchTerm={searchTerm} />
      </RecipeProvider>
    </div>
  );
};

export default HomePage;
