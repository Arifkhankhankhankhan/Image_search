import React, { useState } from 'react';

function SearchBar({ fetchImages }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    if (searchValue.trim() === '') {
      alert('Please enter a search term');
      return;
    }
    fetchImages(searchValue);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Search for images"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
