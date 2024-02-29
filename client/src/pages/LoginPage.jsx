import React, {useState, useContext} from 'react';
import FormBuilder from '../components/FormBuilder';
import { HookContext } from '../hook/useHookProvider';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(HookContext); 
    const navigate = useNavigate();

 
    
    const inputStyle = { 
        width: '400px',
        padding: '10px',
        fontSize: '0.7rem',
        borderRadius: '4px',
        backgroundColor: '#f9f9f9',
        color: '#444',
        display: 'flex',
        marginBottom: '30px', 
        border: '1px solid gray',
        margin: 'auto',
    };

    const buttonLogin = {
        width: '90%',
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        margin: '8px 0',
        borderRadius: '4px',
        cursor: 'pointer',
    };

    const fields = [
        {
            type: 'email',
            name: 'email',
            placeholder: 'Email',
            required: true,
            value: email, 
            onChange: (e) => setEmail(e.target.value),
            style: inputStyle
        },
        {
            type: 'password',
            name: 'password',
            placeholder: 'Password',
            required: true,
            value: password, 
            onChange: (e) => setPassword(e.target.value), 
            style: inputStyle
        },
        {
            type: 'button', 
            label: 'Login', 
            onClick: async () => {
                try {
                    await login(email, password);
                    navigate('/');
                } catch (error) {
                    console.error(error);
                }
            },
            style: buttonLogin
        }
    ];



    return (
        <div className='text-center mt-12'>
            <h1>Login Page</h1>
        <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto">
          <FormBuilder fields={fields} />


            <p className="text-sm text-gray-600 mt-4">
                Don't have an account? <a href="/register" className="text-indigo-600 hover:text-indigo-700">Register</a>
            </p>
        </div>
    
        </div>
    );
};

export default LoginPage;