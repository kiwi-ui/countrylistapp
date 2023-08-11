import React from 'react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return ( <input className="form-control me-2" type="search" aria-label="Search" placeholder="Search country" value={ searchQuery } onChange={(e) => setSearchQuery(e.target.value)} /> );
};

export default SearchBar;
