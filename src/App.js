import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/UI/Header";
import Search from "./components/UI/Search";
import CharacterGrid from "./components/characters/CharacterGrid";
import "./App.css";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getCharacters();

    //eslint-disable-next-line
  }, [query]);

  const getCharacters = async () => {
    setLoading(true);
    try {
      const res = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setCharacters(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid characters={characters} loading={loading} />
    </div>
  );
};

export default App;
