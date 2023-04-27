import React, {useState, useEffect} from 'react';

import './style.css';

import {CardPreviewButton} from '../../components/CardPreview/index';
import {CardDetails} from '../../components/CardDetails';
import {Pagination} from '../../components/Pagination';

export function Home() {
  const [characterName, setCharacterName] = useState('');
  const [characters, setCharacters] = useState([]);
  const [actualPage, setActualPage] = useState();
  const [pages, setPages] = useState();

  const searchCharactersByName = async () => {

    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${characterName}&page=${actualPage}`);
      const results = response.data.results;
      const pagesCount = response.data.info.pages;

      setCharacters(results);
      setPages(pagesCount);
    } catch (error) {
      console.error(error);
    }
  }

  const handleKeyDown = (keyPressed) => {
    if(keyPressed === 'Enter') {
      searchCharactersByName();
    }
  }

  return (
    <>
      <section className='c-header'>
        <img className='c-header__logo' src="./src/assets/Logo.svg" alt="" />

        <div className='c-header__search' >
          <input 
            className='c-header__input' 
            type="text" 
            placeholder='Search characters' 
            onChange={e => setCharacterName(e.target.value)}
            onKeyDown={e => {
              handleKeyDown(e.key); 
              setCharacterName(e.target.value);
            }} />
          <button className='c-button' type='button' onClick={() => {searchCharactersByName()}}>Search</button>
        </div>
      </section>

      <section className='c-charactersFound'>      
        {          
          characters.map(character => (
            <CardPreviewButton 
              key={character.id}
              character={character}
            />
          )) 
        }
      </section>
    </>
  )
}
