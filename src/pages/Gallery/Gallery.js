import React, { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import ImagesList from 'components/ImagesList/ImagesList';
import { getAllCats } from 'services/getCat-api';
import { PageNavMarkers } from 'components/PageNavMarkers/PageNavMarkers';

const Gallery = () => {
  const [breeds, setBreeds] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState('10');
  const [breedId, setBreedId] = useState('abys'); //??? не срабатывает запрос
  const [order, setOrder] = useState('RAND');
  const [type, setType] = useState('Animated'); //????
  const [page, setPage] = useState(0);
  const [has_breeds, setHas_breeds] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      console.log(breedId);
      try {
        const data = await getAllCats(
          limit,
          order,
          has_breeds,
          type,
          page,
          breedId
        ); // Изменили на getAllCats
        console.log('Fetch AllCats', data); // Изменили на Fetch AllCats
        setBreeds(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, [order, type, breedId, limit, page, has_breeds]);

  return (
    <div>
      <PageNavMarkers />
      {breeds.length > 0 && <ImagesList images={breeds} />}
      {error && <p>{error.message}</p>}
      {isloading && <Loader />}
    </div>
  );
};

export default Gallery;
