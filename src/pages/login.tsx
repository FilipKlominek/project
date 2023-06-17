import {LoginForm} from "@/components/forms/loginForm";
import {NavBar} from "@/components/layout/navBar";

export default function Login() {
    return (
        <div>
            <NavBar/>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl font-bold'>Login</h1>
                <LoginForm/>
            </div>
        </div>
    )
}