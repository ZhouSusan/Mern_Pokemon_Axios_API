import React, {useState} from 'react';
import axios from 'axios';
import styles from './styles.module.css';

const AxiosPokemon = (props) => {
    const [pokemons, setPokemons] = useState([]);

    const getPokemon = (event) => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then((res) => {
                setPokemons(res.data.results);
            })
    };
    return (
        <div>
            <button onClick={getPokemon} className={styles.btn}>Fetch Pokemon</button>
            {
                pokemons.map((pokemon, i) => {
                    return <p key={i}>• {pokemon.name}</p>
                })
            }
        </div>
    )
}

export default AxiosPokemon;