import React, { useContext } from 'react';
import { AuthContext } from '../hook/AuthProvider';

export const HomePage = () => {
    const { currentUser } = useContext(AuthContext); 

    return (
        <div>
            <h1>Home Page</h1>
            <p>Current User: {currentUser ? currentUser.fullName : 'None'}</p> 
        </div>
    );
}

export default HomePage;