import ChatBot from "./ChatBotPage";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <ChatBot />
    </div>
  );
};

export default HomePage;
