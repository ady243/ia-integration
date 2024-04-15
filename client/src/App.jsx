import React from 'react';
import { HookProvider } from './hook/useHookProvider';
import RoutesConfig from './AllRoutesConfig/RouteConfig';
import { RecipeProvider } from "../src/hook/RecipesProvider";


const App = () => {
    return (
        <RecipeProvider>
        <HookProvider>
            <RoutesConfig />
          
        </HookProvider>
         </RecipeProvider>
    );
};

export default App;