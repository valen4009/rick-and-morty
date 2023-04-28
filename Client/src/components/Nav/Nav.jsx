import "./Nav.css"
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom'

const Nav = ({ onSearch }) => {

    return (
        <nav class="nav">
            <SearchBar onSearch={onSearch}/>
            
            <button>
                <Link to='/favorites'>Favorites</Link>
            </button>

            <button>
                <Link to='/about'>About</Link>
            </button>

            <button>
                <Link to='/home'>Home</Link>
            </button>

            <button>
                <Link to="/">LOGOUT</Link>
            </button>
        </nav>
    )
}

export default Nav;