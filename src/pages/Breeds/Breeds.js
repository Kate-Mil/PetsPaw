import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import ImagesList from 'components/ImagesList/ImagesList';
import { BreedsList } from 'components/BreedsList/BreedsList';
import { PageNavMarkers } from 'components/PageNavMarkers/PageNavMarkers';
import { getAllBreeds } from 'services/getCat-api';

const Breeds = () => {
  const [breeds, setBreeds] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  // const [limit, setLimit] = useState('5');
  // const [breedId, setBreedId] = useState('');
  // const [order, setOrder] = useState('RAND');

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

  // useEffect(() => {
  //   async function fetchData() {
  //     setIsloading(true);
  //     try {
  //       const data = await getCatsImagesByBreed(breedId, limit, order);
  //       setBreeds(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsloading(false);
  //     }
  //   }

  //   fetchData();
  // }, [breedId, limit, order]);

  const images = breeds.map(el => el.image).filter(el => el !== undefined);
  const allBreeds = breeds.map(el => ({ name: el.name, id: el.id }));
  console.log(allBreeds);

  return (
    <div>
      <div>
        <PageNavMarkers />
        <BreedsList breeds={allBreeds} />
        <>LoadingLimitsList</>
        <button type="button">A-Z Order</button>
        <button type="button">Z-A Order</button>
        {images.length > 0 && <ImagesList images={images} />}
        {error && <p>{error.message}</p>}
        {isloading && <Loader />}
      </div>
    </div>
  );
};

export default Breeds;
