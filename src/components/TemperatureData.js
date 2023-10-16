import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TemperatureData() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    axios.get('/api/temperature')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredData = data.filter(item => item.temperature.includes(filter));

  return (
    <div>
      <h2>Temperature Data</h2>
      <input
        type="text"
        placeholder="Search by temperature..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul>
        {filteredData.map((item) => (
          <li key={item._id}>{item.temperature}</li>
        ))}
      </ul>
    </div>
  );
}

export default TemperatureData;
