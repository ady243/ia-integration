import React, { useState } from "react";

const Register = () => {
    const [fullName,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error, setError ] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ fullName, email, password }),
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <div> {error} </div>}
            <input type="test" value={fullName} onChange={(e) => setFullName(e.target.value)}
                   placeholder="fullname" required
            />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                   placeholder="email" required
            />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                   placeholder="password" required
            />
            <button type="submit">Sign Up</button>
        </form>
    )
}
export default Register;