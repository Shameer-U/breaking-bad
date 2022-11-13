import { FaSearch } from "react-icons/fa";
import { useState, useContext } from "react";
import './search.css';
import { GlobalContext } from '../../context/GlobalState';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const { searchCharacters } = useContext(GlobalContext);

    const submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(searchTerm === '') {
            return alert('Please enter search term');
        }

        searchCharacters(searchTerm);
    }

    return (
        <div className="search-container">
            <h1>
                Breaking Bad
            </h1>
            <p>Characters of Breaking Bad series</p>
            <div className='search-bar'>
                <form onSubmit={submitHandler}>
                    <input type="text" value={searchTerm} placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} />
                    <button type="submit"><FaSearch /></button>
                </form>
            </div>
        </div>
    );
    }

export default Search;