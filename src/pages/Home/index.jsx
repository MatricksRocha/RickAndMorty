import React, {useState} from 'react';

import './style.css';

import {CardPreview} from '../../components/CardPreview';
import {Pagination} from '../../components/Pagination';

export function Home() {
  const [characterName, setCharacterName] = useState('');
  const [characters, setCharacters] = useState([]);
  const [actualPage, setActualPage] = useState();
  const [pages, setPages] = useState();

  const searchCharactersByName = async () => {

    try {
      console.log(`a pagina atual é: ${actualPage}`)
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${characterName}&page=${actualPage}`);
      const results = await response.data.results;
      const pagesCount = await response.data.info.pages;

      setCharacters(results);
      setPages(pagesCount);
    } catch (error) {
      console.error(error);
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
            />
          <button className='c-header__button' type='button' onClick={() => {searchCharactersByName()}}>Search</button>
        </div>
      </section>

      <Pagination 
        pages = {pages}
        actualPage = {actualPage}
      />

      <section className='c-charactersFound'>      
        {          
          characters.map(character => (
            <CardPreview 
              key = {character.id}
              avatar = {character.image}
              name = {character.name}
              species = {character.species}
            />
          )) 
        }
      </section>

      <Pagination 
        pages = {pages}
        actualPage = {actualPage}
      />
    </>
  )
}
