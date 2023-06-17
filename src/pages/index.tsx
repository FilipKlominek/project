import {Inter} from 'next/font/google'
import {NavBar} from "@/components/layout/navBar";
import {GenreList} from "@/components/layout/genres";
import {AddGenre} from "@/components/forms/addGenre";

const inter = Inter({subsets: ['latin']})

export default function Home() {

    return (


        <>
            <NavBar/>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl font-bold'>Genres</h1>
                <AddGenre/>
            </div>
            <GenreList/>
        </>
    )
}
