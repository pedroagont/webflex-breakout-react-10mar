import usePokemonData from './hooks/usePokemonData'
import CardList from './components/CardList'
import './App.css';

function App() {
  const { pokemon } = usePokemonData();
  
  return (
    <>
      <h1 className="title-center">Hello world! 👋</h1>
      <CardList pokemon={pokemon}/>
    </>
  );
}

export default App;
