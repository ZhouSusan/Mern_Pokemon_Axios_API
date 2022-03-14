import React, {useState} from 'react';
import axios from 'axios';
import styles from './styles.module.css';

const AxiosPokemon = (props) => {
    const {pokemons, setPokemons} = props;

    const getPokemon = (event) => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
            .then((response) => {
                setPokemons(response.data.results);
            })
    };
    return (
        <div>
            <button onClick={getPokemon} className={styles.btn}>Fetch Pokemon</button>
        </div>
    )
}

export default AxiosPokemon;