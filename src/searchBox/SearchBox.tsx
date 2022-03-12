import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as IcoSearch } from '../css/assets/ico_search.svg';
import styles from './SearchBox.module.scss';


const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState<String>("");
  const navigate = useNavigate();

  return <form className={styles.searchBox} onSubmit={e => {
    navigate(`/search?searchQuery=${searchQuery}&sortField=score&sortOrder=desc&pageNumber=0&rpp=10`)
  }}>
    <input className='searchBoxInput' placeholder='Looking for a painting?' onChange={e => setSearchQuery(e.target.value)} />
    <button type='submit' className='searchBoxButton'>
      <IcoSearch />
    </button>
  </form>
}

export default SearchBox;