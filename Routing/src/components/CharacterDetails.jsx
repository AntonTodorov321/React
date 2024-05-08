import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const CharacterDetails = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});
    const localation = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://swapi.py4e.com/api/people/${id}`)
            .then(response => {

                if (!response.ok) {
                    throw new Error("Not Found");
                }
                 return response.json()
            })
            .then(setCharacter)
            .catch(err => {
                navigate("/characters");
            });

        console.log(localation.pathname);
    }, []);

    return (
        <>
            <h2>{character.name}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aperiam nostrum temporibus, voluptatibus delectus deserunt pariatur, sit corporis beatae eveniet recusandae assumenda ipsum, minus facilis animi provident deleniti! Doloremque, distinctio?</p>
        </>
    );
};

export default CharacterDetails;