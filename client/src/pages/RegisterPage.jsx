
import React, {useState, useContext} from 'react';
import FormBuilder from '../components/FormBuilder';
import { HookContext } from '../hook/HookProvider';
import { useNavigate } from 'react-router-dom';
import ChatBot from './ChatBotPage';


const RegisterPage = () => {

    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useContext(HookContext); 
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

    const buttonRegister = {
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
            type: 'text',
            name: 'fullName',
            placeholder: 'Full Name',
            required: true,
            value: fullName, 
            onChange: (e) => setFullName(e.target.value),
            style: inputStyle
        },
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
            label: 'create account', 
            onClick: async () => {
                try {
                    await register(email, password, fullName);
                    navigate('/login');
                } catch (error) {
                    console.error(error);
                }
            },
            style: buttonRegister
        }
    ];
   
    return (
        <>
        <div className='text-center mt-12'>
            <h1>Register</h1>
        <div className="bg-white rounded px-8 pt-6 pb-8 mb-4 max-w-lg mx-auto">
          <FormBuilder fields={fields} />
            <p className="text-sm text-gray-600 mt-4">
          Already have account? <a href="/login" className="text-indigo-600 hover:text-indigo-700">Login</a>
            </p>
        </div>
    
        </div>
        </>
       
    )
}
export default RegisterPage;