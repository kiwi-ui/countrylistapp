import { useState } from 'react';
import SearchBar from '../SearchBar'
import {HiSearchCircle} from 'react-icons/hi';

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
    <nav className="navbar navbar-expand-lg bg-primary border border-bottom fixed-top w-100 z10">
        <div className="container">
            <p className="fs-4 mb-0">CrossOver</p>
            <form className="d-flex" role="search">
                <button className="btn" onClick={showSearchbar}><HiSearchCircle className="color-primary fs-3"/></button>
            </form>

            {toggleSearch && <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> }
        </div>
    </nav>
  )
}

export default NavBar
