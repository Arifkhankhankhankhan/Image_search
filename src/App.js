import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ImageContainer from './components/ImageContainer';

function App() {
  const [images, setImages] = useState([]);

  const fetchImages = async (searchValue) => {
    const key = 'RuJTeKhXAyF9G-9VlCJJv1NlEMuCgGCDgIS-2Brjv3E';
    const url = `https://api.unsplash.com/search/photos?page=1&query=${searchValue}&client_id=${key}`;
    const response = await fetch(url);
    const data = await response.json();
    setImages(data.results);
  };

  return (
    <div className="App">
      <Header />
      <SearchBar fetchImages={fetchImages} />
      <ImageContainer images={images} />
    </div>
  );
}

export default App;

