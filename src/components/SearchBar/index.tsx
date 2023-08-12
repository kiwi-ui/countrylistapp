import React from 'react';
import style from './index.module.css';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return ( <input className={ `${style['h-searchbar']} px-4 form-control translate-middle start-50 position-relative shadow` } type="search" aria-label="Search" placeholder="Search country" value={ searchQuery } onChange={(e) => setSearchQuery(e.target.value)} /> );
};

export default SearchBar;
