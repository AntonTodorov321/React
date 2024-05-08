import { useEffect, useState } from "react";

export default function Starwors() {
    const [characters, setCharecters] = useState([]);
    console.log(characters);

    useEffect(() => {
        fetch("https://swapi.dev/api/people")
            .then(res => res.json())
            .then(data => {
                setCharecters(data.results);
                console.log(characters);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Starwors</h1>
            <ul>
                {characters.map(c => <li key={c.url}>{c.name}</li>)}
            </ul>
        </div>
    );

}