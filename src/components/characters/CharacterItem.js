import React from "react";

const CharacterItem = ({ character }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={character.img} alt='character' />
        </div>
        <div className='card-back'>
          <h1>{character.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {character.portrayed}
            </li>
            <li>
              <strong>Nickname:</strong> {character.nickname}
            </li>
            <li>
              <strong>Occupation:</strong> {character.occupation[0]}
            </li>
            <li>
              <strong>Status:</strong> {character.status}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
