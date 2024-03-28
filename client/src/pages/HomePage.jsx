
import ChatBot from './ChatBotPage';
import ButtonTestSide from "./ButtonTestSide.jsx";
import ButtonTestGrocery from "./ButtonTestGrocery.jsx";
import Sidebar from "../components/SideBar"

export const HomePage = () => {

    return (
        <div>
               <Sidebar/>

            <ButtonTestSide/>
            <ButtonTestGrocery/>
            <ChatBot />
        </div>
    );
}

export default HomePage;