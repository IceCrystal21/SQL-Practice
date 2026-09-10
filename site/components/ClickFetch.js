import React, { useState } from 'react';

function ClickFetcher(buttonText, endpoint) {
  const [data, setData] = useState('');

  const fetchJoke = async () => {
    try {
      const response = await fetch(endpoint);
      const json = await response.json();
      setData(json.json);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
      <button onClick={fetchJoke}>{buttonText}</button>
  );
}

export default ClickFetcher