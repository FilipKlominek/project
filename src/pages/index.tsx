import {Inter} from 'next/font/google'
import {NavBar} from "@/components/layout/navBar";

const inter = Inter({subsets: ['latin']})

export default function Home() {

    return (


        <>
            <NavBar/>
            {/*  <GameList/>  */}
        </>
    )
}
