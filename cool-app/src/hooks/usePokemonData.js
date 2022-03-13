import { useState, useEffect } from 'react';

function usePokemonData() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(false)
  
  function fetchPokemon() {
    setLoading(true)
    setTimeout(() => {
      const URL_POKEAPI = 'https://pokeapi.co/api/v2/pokemon'
      fetch(URL_POKEAPI)
      .then(res => res.json())
      .then(data => setPokemon(data.results))
      .then(() => setLoading(false))
    }, 3000)
  }
  
  useEffect(() => fetchPokemon(), []);
  
  return { pokemon, loading }
}

export default usePokemonData;
