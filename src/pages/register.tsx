import {NavBar} from "@/components/layout/navBar";
import {RegisterForm} from "@/components/forms/registerForm";

export default function Register() {
    return (
        <div>
            <NavBar/>
            <div className='flex flex-col items-center'>
                <h2 className='text-4xl font-bold'>Register</h2>
                <RegisterForm/>
            </div>
        </div>
    )
}