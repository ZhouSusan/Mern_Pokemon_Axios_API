import React, {useState} from 'react';
import './App.css';
import Display from './compononets/Display';
import AxiosPokemon from './compononets/AxiosPokemon';


function App() {
  const [pokemons, setPokemons] = useState([]);

  return (
    <div className="App">
      <AxiosPokemon pokemons={pokemons} setPokemons={setPokemons}/>
      <Display pokemons={pokemons}/>
    </div>
  );
}

export default App;
