import { useState } from 'react';
import SearchBar from '../SearchBar'
import {HiSearchCircle} from 'react-icons/hi'
interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

const NavBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const showSearchbar = (e: any) => {
    e.preventDefault();
    setToggleSearch(e => !e);
  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <form className="d-flex" role="search">
                <button className="btn" onClick={showSearchbar}><HiSearchCircle className="fs-2 color-primary"/></button>
                {toggleSearch && <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> }
            </form>
        </div>
    </nav>
  )
}

export default NavBar
