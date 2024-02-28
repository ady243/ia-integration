import React from 'react';
import { HookProvider } from './hook/HookProvider';
import RoutesConfig from './AllRoutesConfig/RouteConfig';

const App = () => {
    return (
        <HookProvider>
            <RoutesConfig />
        </HookProvider>
    );
};

export default App;