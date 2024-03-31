import ChatBot from './ChatBotPage';
import Header from '../components/Header';
import Footer from '../components/Footer';
import "./pages.css";


export const HomePage = () => {


    return (
        <div>
            <Header/>
            <ChatBot/>
       
           {/* <div className="footer">
            <Footer />
        </div> */}
        </div>
    );
}

export default HomePage;