import Link from "next/link";
import {useEffect, useState} from "react";


export function NavBar() {

    const [email, setEmail] = useState('');

    useEffect(() => {
        setEmail(localStorage.getItem('email'));
        console.log(email);
    }, [email]);

    const clearEmail = () => {
        localStorage.removeItem('email');
    }

    function Logout() {
        if (email != '') {
            return <button onClick={clearEmail} className='p-4 hover:bg-gray-800'>Logout</button>;
        }
    }

    return (
        <div className='flex justify-between'>
            <div className='flex items-center'>
                <Link className='p-4 hover:bg-gray-800' href='/'>Home</Link>
                <Link className='p-4 hover:bg-gray-800' href='/login'>Login</Link>
                <Link className='p-4 hover:bg-gray-800' href='/register'>Register</Link>
            </div>
            <div className='flex items-center'>
                {email}
                <Logout/>
            </div>
        </div>
    )
}