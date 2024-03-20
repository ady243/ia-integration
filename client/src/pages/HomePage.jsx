import React, { useContext , useState} from "react";
import { HookContext } from "../hook/useHookProvider";
import ChatBot from "./ChatBotPage";
import DotLoad from "../components/load/DotLoad";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";


export const HomePage = () => {
  // const { currentUser } = useContext(HookContext);
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <h1>Home Page</h1>
      {/* <p>Current User: {currentUser ? currentUser.fullName : 'None'}</p>  */}

      {/* <ChatBot /> */}

      <div className="home-page">
        <Navbar />
        <Sidebar />
        <div className="content">
          <h1>Welcome to our landing page</h1>
          <p>This is the homepage content...</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
