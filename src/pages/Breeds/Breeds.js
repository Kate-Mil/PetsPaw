import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import ImagesList from 'components/ImagesList/ImagesList';
import { BreedsList } from 'components/BreedsList/BreedsList';
import { PageNavMarkers } from 'components/PageNavMarkers/PageNavMarkers';
import {
  getAllBreeds,
  getCatsImagesByBreed,
  getCatsBreedIdByImage,
} from 'services/getCat-api';
import { LoadingLimitsList } from 'components/LoadingLimitsList/LoadingLimitsList';
import { OrderBtns } from 'components/OrderBtns/OrderBtns';
import { SortItemsWrapper, Wrapper } from './Breeds.styled';
import { BreedInfo } from 'components/BreedInfo/BreedInfo';

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState('100');
  const [breedId, setBreedId] = useState('');
  const [order, setOrder] = useState('ASC');
  const [isBreedsData, setIsBreedsData] = useState(true);
  const [searchId, setSearchId] = useState('');
  const [breedInfo, setBreedInfo] = useState(null);

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
        // console.log('FetchBYID&LIMIT', data);
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

  //render info by condition (all pictures of particular breed and addInfo)
  useEffect(() => {
    if (searchId === '') {
      return;
    }
    async function fetchData() {
      setIsloading(true);
      try {
        setLimit('100');
        setBreedId('');
        const data = await getCatsImagesByBreed(searchId, limit);
        console.log('BREED INFO', data);
        setBreedInfo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }
    fetchData();
  }, [searchId, limit]);

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

  const handleImageClick = async id => {
    try {
      const data = await getCatsBreedIdByImage(id);
      setSearchId(data);
      console.log('SEARCID:', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // console.log(searchId);

  // const sortedBreeds = [...breeds].sort((a, b) => {
  //   if (order === 'ASC') {
  //     return a.name.localeCompare(b.name);
  //   } else {
  //     return b.name.localeCompare(a.name);
  //   }
  // });

  const result = breeds.map(el => el.image).filter(el => el !== undefined);

  // return (
  //   <div>
  //     <Wrapper>
  //       <PageNavMarkers />
  //       <SortItemsWrapper>
  //         <BreedsList onClick={handleBreedIdClick} sortOrder={order} />
  //         <LoadingLimitsList onClick={handleLimitClick} />
  //         <OrderBtns onClick={handleOrderClick} />
  //       </SortItemsWrapper>
  //     </Wrapper>
  //     {isBreedsData
  //       ? breeds.length > 0 && (
  //           <ImagesList images={result} onImageClick={handleImageClick} />
  //         )
  //       : breeds.length > 0 && (
  //           <ImagesList images={breeds} onImageClick={handleImageClick} />
  //         )}
  //     {error && <p>{error.message}</p>}
  //     {isloading && <Loader />}
  //   </div>
  // );
  return (
    <div>
      <Wrapper>
        <PageNavMarkers />
        {breedInfo === null && (
          <SortItemsWrapper>
            <BreedsList onClick={handleBreedIdClick} sortOrder={order} />
            <LoadingLimitsList onClick={handleLimitClick} />
            <OrderBtns onClick={handleOrderClick} />
          </SortItemsWrapper>
        )}
      </Wrapper>
      {breedInfo !== null ? (
        <BreedInfo breedInfo={breedInfo} />
      ) : (
        <>
          {isBreedsData
            ? breeds.length > 0 && (
                <ImagesList images={result} onImageClick={handleImageClick} />
              )
            : breeds.length > 0 && (
                <ImagesList images={breeds} onImageClick={handleImageClick} />
              )}
          {error && <p>{error.message}</p>}
          {isloading && <Loader />}
        </>
      )}
    </div>
  );
};

export default Breeds;
