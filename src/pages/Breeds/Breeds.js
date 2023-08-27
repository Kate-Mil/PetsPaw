import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import ImagesList from 'components/ImagesList/ImagesList';
import { BreedsList } from 'components/BreedsList/BreedsList';
import { PageNavMarkers } from 'components/PageNavMarkers/PageNavMarkers';
import { getAllBreeds, getCatsImagesByBreed } from 'services/getCat-api';
import { LoadingLimitsList } from 'components/LoadingLimitsList/LoadingLimitsList';
import { OrderBtns } from 'components/OrderBtns/OrderBtns';
import { SortItemsWrapper, Wrapper } from './Breeds.styled';

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState('100');
  const [breedId, setBreedId] = useState('');
  const [order, setOrder] = useState('ASC'); //изменить на sort
  const [isBreedsData, setIsBreedsData] = useState(true);

  //render images of all breeds from the first loading of the page
  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getAllBreeds();
        console.log('Fetch AllBreeds', data);
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

  //render images by condition (all pictures of particular breed and limit of the pictures per page)
  useEffect(() => {
    if (breedId === '' && limit === '100') {
      return;
    }
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getCatsImagesByBreed(breedId, limit);
        console.log('FetchBYID&LIMIT', data);
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
  // console.log('BREED ID', breedId);
  const handleLimitClick = limit => {
    setLimit(limit);
  };

  const handleOrderClick = order => {
    setOrder(order);
  };

  const result = breeds.map(el => el.image).filter(el => el !== undefined);

  return (
    <div>
      <Wrapper>
        <PageNavMarkers />
        <SortItemsWrapper>
          <BreedsList onClick={handleBreedIdClick} sortOrder={order} />
          <LoadingLimitsList onClick={handleLimitClick} />
          <OrderBtns onClick={handleOrderClick} />
        </SortItemsWrapper>
      </Wrapper>
      <>
        {isBreedsData
          ? breeds.length > 0 && <ImagesList images={result} />
          : breeds.length > 0 && <ImagesList images={breeds} />}
        {error && <p>{error.message}</p>}
        {isloading && <Loader />}
      </>
    </div>
  );
};

export default Breeds;
