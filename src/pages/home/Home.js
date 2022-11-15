import { useEffect, useContext } from 'react';
import CharacterItem from '../../components/characterItem/CharacterItem';
import './home.css';
import { GlobalContext } from '../../context/GlobalState';
import Search from '../../components/search/Search';
import Spinner from '../../components/spinner/Spinner';

function Home() {
  const { characters, status, fetching, fetchCharacters } = useContext(GlobalContext);
  
  useEffect(() => {
    fetchCharacters();
    
  }, []);

  return (
      <>
        {fetching && <Spinner />}
        <Search />
        <section className='home'>
          <div className='home-container'>
                { (status && characters.length > 0)  ?  characters.map(item => (
                            <CharacterItem key={item?.char_id} character={item} />
                        )) : (
                           !fetching && (
                              <div className='error'>
                                <h4>Data not available</h4>
                              </div>
                            )
                        )
                 }
          </div>
        </section>
      </>
  );
}

export default Home;
