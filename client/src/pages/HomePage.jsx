
import ChatBot from "./ChatBotPage";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import RecipesList from "../components/RecipeList";
import { useState } from "react";



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
      <ChatBot />
    </div>
  );
};


export default HomePage;

