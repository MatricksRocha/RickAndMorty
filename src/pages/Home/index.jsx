import {useState, useEffect} from 'react';

import './style.css';

import {CardPreviewButton} from '../../components/CardPreview/index';
import {PaginationComponent} from '../../components/Pagination';
import {LoadingScreen} from '../../components/LoadingScreen';
import logoImg from '../../assets/Logo.svg';

export function Home() {
  const [characterName, setCharacterName] = useState('');
  const [lastSearchedCharacter, setLastSearchedCharacter] = useState('Initializing different from characterName');
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [showPagination, setShowPagination] = useState(false);
  const [showLoadingScreen, setShowLoadingScreen] = useState(false);

  const searchCharactersByName = async (page = 1, searchDueToPagination) => {
    setCurrentPage(page);
    setShowLoadingScreen(true);
    let response;
    try {
      if(searchDueToPagination) {
        response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${lastSearchedCharacter}&page=${page}`);
      } else {
        response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${characterName}&page=${page}`);
        setLastSearchedCharacter(characterName);
      }
      
      const results = response.data.results;
      const pagesCount = response.data.info.pages;

      setCharacters(results);
      setPages(pagesCount);
      
      setShowPagination(true);
      setShowLoadingScreen(false);
    } catch (error) {
      console.error(error);
      setShowLoadingScreen(false);
    }    
    
  }

  const handlePaginationChange = (page) => {
    if(currentPage !== page) {
      searchCharactersByName(page, true);
    }
  }

  const handleSearchRequest = (character) => {
    if(lastSearchedCharacter !== character) {
      searchCharactersByName(1, false);
    }
  }

  useEffect(() => {
    
  }, [lastSearchedCharacter]);

  return (
    <>
      <section className='c-header'>
        <img className='c-header__logo' src={logoImg} alt="Rick and Morty logo" />

        <div className='c-header__search' >
          <input 
            className='c-header__input' 
            type="text" 
            placeholder='Search characters' 
            onKeyUp={e => {
              setCharacterName(e.target.value);
              if(e.key === 'Enter') {
                handleSearchRequest(characterName);
              }
            }} />
          <button className='c-button' type='button' onClick={() => {handleSearchRequest(characterName)}}>Search</button>
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