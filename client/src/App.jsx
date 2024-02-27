import React from 'react';
import { AuthProvider } from './hook/AuthProvider';
import RoutesConfig from './AllRoutesConfig/RouteConfig';

const App = () => {
    return (
        <AuthProvider>
            <RoutesConfig />
        </AuthProvider>
    );
};

export default App;