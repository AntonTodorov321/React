import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import style from "./CharacterList.module.css";
const base_url = "https://swapi.py4e.com/api";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const abortController = new AbortController();

        fetch(`${base_url}/people`, { signal: abortController.signal })
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results);
            });

        return (() => {
            abortController.abort();
        });
    }, []);

    return (
        <div className={style.characterList}>
            {characters.map((character, index) =>
                <CharacterCard
                    key={character.name}
                    {...character}
                    id={++index}
                />
            )}
        </div>
    );
};

export default CharacterList;