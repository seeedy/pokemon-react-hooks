import React, { useState, useEffect } from 'react';

function DataLoader(props) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(data);

  useEffect(() => {
    const fetchData = async url => {
      setIsLoading(true);
      setError(false);

      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(true);
        console.warn(err);
      }

      setIsLoading(false);
    };
    fetchData('https://pokeapi.co/api/v2/pokemon/' + props.pokeId);
  }, [props.pokeId]);

  return (
    <div>
      {error && <div>Something went wrong...</div>}
      {isLoading ? (
        <div> Loading...</div>
      ) : (
        <div>
          <h1>{data.name}</h1>
          {data.sprites &&
            Object.keys(data.sprites)
              .reverse()
              .map((key, value) => {
                return data.sprites[key] ? (
                  <img src={data.sprites[key]} alt={value} key={value} />
                ) : null;
              })}
        </div>
      )}
    </div>
  );
}

export default DataLoader;
