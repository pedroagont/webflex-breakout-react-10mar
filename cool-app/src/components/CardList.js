import usePokemonData from '../hooks/usePokemonData'
import Card from './Card';

function CardList(props) {
  const { pokemon } = props;
  const { loading } = usePokemonData();
  
  const renderedPokemon = pokemon.map(poke => <Card key={poke.name} name={poke.name} link={poke.url}/>)
  
  if (loading) {
    return (
      <div className="loading">
        <img src="https://i.pinimg.com/originals/4e/a2/3e/4ea23e6339937b95a8aa5cd08eeb3266.gif" alt="loading charmander" />
      </div>
    )
  }
  
  return (
    <>
      <h2 className="title-center">My Pokemon List! 🐰</h2>
      { renderedPokemon }
    </>
  )
}

export default CardList;
