import {Inter} from 'next/font/google'
import {NavBar} from "@/components/layout/navBar";
import {GameList} from "@/components/layout/gameList";

const inter = Inter({subsets: ['latin']})

export default function Home() {

    return (


        <>
            <NavBar/>
            {/*  <GameList/>  */}
        </>
    )
}
