import {LoginForm} from "@/components/forms/loginForm";
import {NavBar} from "@/components/layout/navBar";

export default function Login() {
    return (
        <div>
            <NavBar/>
            <div className='flex flex-col items-center'>
                <h2 className='text-4xl font-bold'>Login</h2>
                <LoginForm/>
            </div>
        </div>
    )
}