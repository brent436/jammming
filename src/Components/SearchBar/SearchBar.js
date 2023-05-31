import React, { useState } from 'react';
import './SearchBar.css';

export function SearchBar(props) {
  const [term, setTerm] = useState('');
  
  const search = () => {
    props.onSearch(term);
  }

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  }
  
  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" onChange={handleTermChange} />
      <button className="SearchButton">SEARCH</button>
    </div>
  )
}