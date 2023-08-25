import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import ImagesList from 'components/ImagesList/ImagesList';
import { BreedsList } from 'components/BreedsList/BreedsList';
import { PageNavMarkers } from 'components/PageNavMarkers/PageNavMarkers';
import { getAllBreeds, getCatsImagesByBreed } from 'services/getCat-api';
import { LoadingLimitsList } from 'components/LoadingLimitsList/LoadingLimitsList';
import { OrderBtns } from 'components/OrderBtns/OrderBtns';

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState('100');
  const [breedId, setBreedId] = useState('');
  const [order, setOrder] = useState('ASC');
  const [isBreedsData, setIsBreedsData] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getAllBreeds();
        setIsBreedsData(true);
        setBreeds(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (breedId === '' && limit === '100') {
      return;
    }
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getCatsImagesByBreed(breedId, limit);
        setIsBreedsData(false);
        setBreeds(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }
    fetchData();
  }, [breedId, limit]);

  const handleBreedIdClick = breedId => {
    setBreedId(breedId);
  };
  console.log(breedId);
  const handleLimitClick = limit => {
    setLimit(limit);
  };

  const handleOrderClick = order => {
    setOrder(order);
  };
  // console.log(order);

  // const sortedBreeds = [...breeds].sort((a, b) => {
  //   if (order === 'ASC') {
  //     return a.name.localeCompare(b.name);
  //   } else {
  //     return b.name.localeCompare(a.name);
  //   }
  // });

  const result = breeds.map(el => el.image).filter(el => el !== undefined);

  return (
    <div>
      <div>
        <PageNavMarkers />
        <div style={{ display: 'flex' }}>
          <BreedsList onClick={handleBreedIdClick} sortOrder={order} />
          <LoadingLimitsList onClick={handleLimitClick} />
          <OrderBtns onClick={handleOrderClick} />
        </div>
        {isBreedsData
          ? breeds.length > 0 && <ImagesList images={result} />
          : breeds.length > 0 && <ImagesList images={breeds} />}
        {error && <p>{error.message}</p>}
        {isloading && <Loader />}
      </div>
    </div>
  );
};

export default Breeds;
