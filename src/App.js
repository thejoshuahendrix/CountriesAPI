import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import axios from 'axios';
import CharacterGrid from './components/CharacterGrid';
import Search from './components/Search'

const App = () => {
  const [countries, setCountries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(()=>{
    const fetchCharacters = async () => {
      const result = await axios(`https://restcountries.eu/rest/v2/name/${query}`)
      
      
      setCountries(result.data)
      setIsLoading(false)
    }

    fetchCharacters();
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q)=>setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} countries={countries} />
    </div>
  );
}

export default App;
