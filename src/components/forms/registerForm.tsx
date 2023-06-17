import {ChangeEvent, SyntheticEvent, useState} from 'react';
import {Simulate} from "react-dom/test-utils";

export function RegisterForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (e:SyntheticEvent) => {
        e.preventDefault()
        const response= fetch('http://localhost:3000/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                'email': email,
                'password': password,
                'username': name
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }

        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <input className='m-2 p-2 bg-black border border-white' placeholder='username' type='text' value={name} onChange={handleName}/>
                </label>
            </div>
            <div>
                <label>
                    <input className='m-2 p-2 bg-black border border-white' placeholder='email' type='email' value={email} onChange={handleEmail}/>
                </label>
            </div>
            <div>
                <label>
                    <input className='m-2 p-2 bg-black border border-white' placeholder='password' type='password' value={password} onChange={handlePassword}/>
                </label>
            </div>
            <div className='text-center'>
                <input className='m-2 p-2 bg-black border border-white hover:bg-gray-800' type='submit' value='submit'/>
            </div>

        </form>
    )
}