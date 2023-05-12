import {ChangeEvent, useState} from "react";

export function Register() {

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

    const handleSubmit = () => {

    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Username:
                <input type="text" value={name} onChange={handleName}/>
            </label>
            <label>Email:
                <input type="email" value={email} onChange={handleEmail}/>
            </label>
            <label>Password:
                <input type="password" value={password} onChange={handlePassword}/>
            </label>
        </form>
    )
}