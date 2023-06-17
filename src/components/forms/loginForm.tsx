import {ChangeEvent, SyntheticEvent, useState} from "react";


export function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        const response = await fetch('http://localhost:3000/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                'email': email,
                'password': password
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(async response => await response.json());

        if (response.data != null) {
            localStorage.setItem('email', response.data.email);
            localStorage.setItem('sessionToken', response.Authorization);

            location.reload();

            return;
        }

        alert('Incorrect email or password')
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <input className='m-2 p-2 bg-black border border-white' placeholder='email'
                           value={email} onChange={handleEmail}/>
                </label>
            </div>
            <div>
                <label>
                    <input className='m-2 p-2 bg-black border border-white' type="password" placeholder='password'
                           value={password} onChange={handlePassword}/>
                </label>
            </div>
            <div className='text-center'>
                <input className='m-2 p-2 bg-black border border-white hover:bg-gray-800' type='submit' value='submit'/>
            </div>
        </form>
    )
}