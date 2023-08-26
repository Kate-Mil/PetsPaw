import React, { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import ImagesList from 'components/ImagesList/ImagesList';
import { getAllCats } from 'services/getCat-api';
import { PageNavMarkers } from 'components/PageNavMarkers/PageNavMarkers';

const Gallery = () => {
  const [breeds, setBreeds] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getAllCats(); // Изменили на getAllCats
        console.log('Fetch AllCats', data); // Изменили на Fetch AllCats
        setBreeds(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <PageNavMarkers />
      {isloading ? (
        <Loader />
      ) : (
        breeds.length > 0 && <ImagesList images={breeds} />
      )}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Gallery;
