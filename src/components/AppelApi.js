import React from 'react';
import './AppelApi.css';


function AppelApi({ citation }) {
    return (
      <div className="AppelApie">
        <img
          src={citation.image}
          alt={citation.character}
        />
        <ul>
          <li>
           {citation.character}           
          </li>
        </ul>
        <p>{citation.quote}</p>
      </div>
    );
  };

















export default AppelApi; 