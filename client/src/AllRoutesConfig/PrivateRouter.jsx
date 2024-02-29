import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HookContext } from '../hook/useHookProvider';

const PrivateRouter = ({ children }) => {
    const { token } = useContext(HookContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token, navigate]);

    return token ? children : null;
};

export default PrivateRouter;