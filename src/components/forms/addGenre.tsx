import {ChangeEvent, SyntheticEvent, useState} from "react";


export function AddGenre() {

    const [name, setName] = useState('');

    const handleName = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleSubmit = async (e: SyntheticEvent) => {

        e.preventDefault()
        const response = await fetch('http://localhost:3000/genres', {
            method: 'POST',
            body: JSON.stringify({
                'name': name,
            }),
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('sessionToken').toString(),
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(async response => await response.json());

        location.reload();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <input className='m-2 p-2 bg-black border border-white' placeholder='add a genre'
                           value={name} onChange={handleName}/>
                </label>
            </div>
            <div className='text-center'>
                <input className='m-2 p-2 bg-black border border-white hover:bg-gray-800' type='submit' value='submit'/>
            </div>
        </form>
    )
}