import React from 'react';
import { HookProvider } from './hook/useHookProvider';
import RoutesConfig from './AllRoutesConfig/RouteConfig';

const App = () => {
    return (
        <HookProvider>
            <RoutesConfig />
        </HookProvider>
    );
};

export default App;