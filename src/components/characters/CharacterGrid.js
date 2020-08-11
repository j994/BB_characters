import React from "react";
import Spinner from "../UI/Spinner";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ characters, loading }) => {
  return loading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {characters.map((character) => (
        <CharacterItem character={character} key={character.char_id} />
      ))}
    </section>
  );
};

export default CharacterGrid;
