import ChatBot from './ChatBotPage';
import Header from '../components/Header';
import RecipeLoader from '../components/load/RecipeLoader';


export const HomePage = () => {


    return (
        <div>
            <Header/>
           <ChatBot />
              <RecipeLoader />
        </div>
    );
}

export default HomePage;