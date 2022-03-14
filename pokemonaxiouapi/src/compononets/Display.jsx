import React from 'react';
import styles from './styles.module.css';

const Display = (props) => {

    return (
        <div>
        {
            props.pokemons.map((pokemon, i) => {
                return <p key={i} className={styles.list}>• {pokemon.name}</p>
            })
        }
        </div>
    )
}

export default Display;