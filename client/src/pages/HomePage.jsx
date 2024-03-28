
import ChatBot from './ChatBotPage';
import ButtonTestSide from "./ButtonTestSide.jsx";
import ButtonTestGrocery from "./ButtonTestGrocery.jsx";
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