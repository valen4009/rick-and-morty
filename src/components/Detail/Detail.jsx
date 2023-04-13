import axios from 'axios';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character"
const API_KEY = "d4c0456be5a3.a96a007548bd179de603"

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState ({})

    useEffect(() => {
        axios(`${URL_BASE}/${id}?key=${API_KEY}`)
        .then(response => response.data)
        .then((data) => {
            if (data.name) {
                  setCharacter(data);
               } else {
                  window.alert('No hay personajes con ese ID');
               }
        });
        return setCharacter({});
    }, [id]);

    return(
        <div className="detail">
            {/*character ? <h2>{//character.name}</h2> : null //esto funciona domo el if, donde el if es ? y el else es :*/}
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name} />
        </div>
    )
};

export default Detail