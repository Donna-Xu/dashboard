import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [collectionX, setCollectionX] = useState('temperature'); 
  const [collectionY, setCollectionY] = useState('pressure'); 
  const [valueX, setValueX] = useState('');
  const [valueY, setValueY] = useState('');

  const handleSearch = () => {
    onSearch({ collectionX, collectionY, valueX, valueY });
  };

  return (
    <div>
      <select value={collectionX} onChange={(e) => setCollectionX(e.target.value)}>
        <option value="temperature">Temperature</option>
        <option value="pressure">Pressure</option>
        <option value="color">Color</option>
        <option value="location">Location</option>
        <option value="meltingPoint">Melting Point</option>
        <option value="freezingPoint">Freezing Point</option>
        <option value="rainRate">Rain Rate</option>
        <option value="size">Size</option>
        <option value="weightgrams">Weight (Grams)</option>
        <option value="quantity">Quantity</option>
      </select>
      <select value={collectionY} onChange={(e) => setCollectionY(e.target.value)}>
        <option value="temperature">Temperature</option>
        <option value="pressure">Pressure</option>
        <option value="color">Color</option>
        <option value="location">Location</option>
        <option value="meltingPoint">Melting Point</option>
        <option value="freezingPoint">Freezing Point</option>
        <option value="rainRate">Rain Rate</option>
        <option value="size">Size</option>
        <option value="weightgrams">Weight (Grams)</option>
        <option value="quantity">Quantity</option>
      </select>
      <input
        type="text"
        placeholder="Value for Collection X"
        value={valueX}
        onChange={(e) => setValueX(e.target.value)}
      />
      <input
        type="text"
        placeholder="Value for Collection Y"
        value={valueY}
        onChange={(e) => setValueY(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
