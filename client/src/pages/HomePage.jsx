
import ChatBot from './ChatBotPage';
import ButtonTestSide from "./Sidedish.jsx";
import ButtonTestGrocery from "./Grocery.jsx";
import Header from '../components/Header';

export const HomePage = () => {

    return (
        <div>
            <Header/>

            <ButtonTestSide/>
            <ButtonTestGrocery/>
            <ChatBot />
        </div>
    );
}

export default HomePage;