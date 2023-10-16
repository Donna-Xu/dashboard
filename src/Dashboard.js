import React from 'react';
import './Dashboard.css'; 

function Dashboard({ data }) {
  return (
    <div className="dashboard-container">
      <h2>Search Results</h2>
      {data.length === 0 ? (
        <p>No results to display.</p>
      ) : (
        <ul className="results-list">
          {data.map((item, index) => (
            <li key={index}>
              {/* Render the data from MongoDB here */}
              <pre>{JSON.stringify(item, null, 2)}</pre>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;


