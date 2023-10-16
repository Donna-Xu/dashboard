import React, { useState } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import SearchBar from './SearchBar';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (criteria) => {
    try {
      const response = await fetch(`http://localhost:5000/api/search`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(criteria),
      });
  
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
      } else {
        // Handle error
        console.error('Error in search request');
        // Log response status and text
        console.error(`Response Status: ${response.status}`);
        console.error(`Response Text: ${await response.text()}`);
      }
    } catch (error) {
      console.error('Error in search request', error);
    }
  };
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
        <SearchBar onSearch={handleSearch} />
        <Dashboard data={searchResults} />
      </header>
    </div>
  );
}

export default App;
