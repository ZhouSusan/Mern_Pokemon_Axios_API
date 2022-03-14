import React from 'react';

const Display = (props) => {

    return (
        <div>
        {
            props.pokemons.map((pokemon, i) => {
                return <p key={i}>• {pokemon.name}</p>
            })
        }
        </div>
    )
}

export default Display;