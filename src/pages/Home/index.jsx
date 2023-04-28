import {useState} from 'react';

import './style.css';

import {CardPreviewButton} from '../../components/CardPreview/index';
import {PaginationComponent} from '../../components/Pagination';
import {LoadingScreen} from '../../components/LoadingScreen';
import logoImg from '../../assets/Logo.svg';

export function Home() {
  const [characterName, setCharacterName] = useState('');
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [showPagination, setShowPagination] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);
  const [lastSearchedCharacter, setLastSearchedCharacter] = useState('');

  const searchCharactersByName = async (page = 1) => {
    setCurrentPage(page);
    setShowPagination(true);
    setShowLoadingScreen(true);

    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${characterName}&page=${page}`);
      const results = response.data.results;
      const pagesCount = response.data.info.pages;

      setCharacters(results);
      setPages(pagesCount);
      setLastSearchedCharacter(characterName);
    } catch (error) {
      console.error(error);
    }
    setShowLoadingScreen(false);
  }

  const handleKeyDown = (keyPressed, character) => {
    if(keyPressed === 'Enter') {
      //handleSearchRequest(character);
      searchCharactersByName(1);
    }
  }

  const handlePaginationChange = (page) => {
    if(currentPage !== page) {
      //setCharacterName(lastSearchedCharacter);
      searchCharactersByName(page);
    }
  }

  const handleSearchRequest = (character) => {
    if(lastSearchedCharacter !== character) {
      searchCharactersByName(1);
    }
  }

  return (
    <>
      <section className='c-header'>
        <img className='c-header__logo' src={logoImg} alt="Rick and Morty logo" />

        <div className='c-header__search' >
          <input 
            className='c-header__input' 
            type="text" 
            placeholder='Search characters' 
            onChange={e => setCharacterName(e.target.value)}
            onKeyDown={e => {
              handleKeyDown(e.key, e.target.value); 
              setCharacterName(e.target.value);
            }} />
          <button className='c-button' type='button' onClick={() => {searchCharactersByName(1)}}>Search</button>
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

      {showLoadingScreen && <LoadingScreen />}
      {showPagination && <PaginationComponent handlePaginationChange={handlePaginationChange} pages={pages} currentPage={currentPage} />}
    </>
  )
}