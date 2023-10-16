import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CollectionData({ collectionName }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/${collectionName}`) 
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [collectionName]);

  return (
    <div>
      <h2>{collectionName.toUpperCase()} Data</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item._id}>
              {/* Display your MongoDB data fields here */}
              <div>{collectionName} Field: {item.fieldName}</div>
              {/* Add more fields specific to the collection */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CollectionData;
