import React, {useState, useContext} from 'react';
import FormBuilder from '../components/FormBuilder';
import { API_URL } from '../configUrl';
import { AuthContext } from '../hook/AuthProvider';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { saveToken, saveCurrentUser } = useContext(AuthContext); 
    const navigate = useNavigate();

    const loginUser = (email, password) => {
        fetch(
            `${API_URL}/api/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            saveToken(data.token); 
            saveCurrentUser(data.user); 
            console.log('token saved', data.token);
           navigate('/home');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }
    
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
            onClick: () => loginUser(email, password),
            style: buttonLogin
        }
    ];



    return (
        <div className='text-center mt-12'>
            <h1>Login Page</h1>
        <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto">
          <FormBuilder fields={fields} />
        </div>
            
        </div>
    );
};

export default LoginPage;