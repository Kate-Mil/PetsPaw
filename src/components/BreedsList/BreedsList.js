import { useEffect, useState } from 'react';
import { getAllBreeds } from 'services/getCat-api';

export const BreedsList = ({ onClick }) => {
  const [breeds, setBreeds] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getAllBreeds();
        setBreeds(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, []);

  const allBreeds = breeds.map(el => ({ name: el.name, id: el.id }));

  return (
    <ul>
      {allBreeds.map(({ id, name }) => (
        <li key={id}>
          <button onClick={() => onClick(id)}>{name}</button>
        </li>
      ))}
      {error && <p>{error.message}</p>}
      {isloading && <p>Loading...</p>}
    </ul>
  );
};
