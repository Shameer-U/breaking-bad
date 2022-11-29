import { FaSearch } from "react-icons/fa";
import { useContext, useRef } from "react";
import './search.css';
import { GlobalContext } from '../../context/GlobalState';

const Search = () => {
    //const [searchTerm, setSearchTerm] = useState('');
    const { searchCharacters } = useContext(GlobalContext);
    const searchRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(searchRef.current.value === '') {
            return alert('Please enter search term');
        }

        searchCharacters(searchRef.current.value);

        //searchRef.current.value = '';//making search value empty
    }

    return (
        <div className="search-container">
            <h1 className="main-heading">
                Breaking Bad
            </h1>
            <p>Characters of Breaking Bad series</p>
            <div className='search-bar'>
                <form onSubmit={submitHandler}>
                    {/* <input type="text" value={searchTerm} placeholder="Search..." onChange={(e) => setSearchTerm(e.target.value)} /> */}
                    <input type="text" ref={searchRef}  placeholder="Search..." />
                    <button type="submit"><FaSearch /></button>
                </form>
            </div>
        </div>
    );
    }

export default Search;