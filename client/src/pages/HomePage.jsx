
import ChatBot from "./ChatBotPage";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import RecipesList from "../components/RecipeList";
import { RecipeProvider } from "../hook/RecipesProvider";


export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <RecipeProvider> {/* Enveloppez votre application avec RecipeProvider */}
            <RecipesList />
        </RecipeProvider>
      <ChatBot />
    </div>
  );
};


export default HomePage;

