import { Outlet, useParams } from 'react-router-dom';
import { BreedInfo } from 'components/BreedInfo/BreedInfo';
import { useEffect, useState } from 'react';

import Loader from 'components/Loader/Loader';
import {
  getCatsImagesByBreed,
  getCatsBreedIdByImage,
} from 'services/getCat-api';

const { PageNavMarkers } = require('components/PageNavMarkers/PageNavMarkers');

const BreedDetails = () => {
  const [breedInfo, setBreedInfo] = useState(null);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [breedId, setBreedId] = useState('');
  const { id } = useParams();
  const parentPageTitle = 'breeds';

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        console.log({ id });
        const breedId = await getCatsBreedIdByImage(id);
        console.log({ breedId });
        setBreedId(breedId);
        const limit = '100';
        const data = await getCatsImagesByBreed(breedId, limit);
        console.log('BREED INFO', data);
        setBreedInfo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }
    fetchData();
  }, [breedId, id]);

  return (
    <>
      <>
        <PageNavMarkers parentPageTitle={parentPageTitle} />
        <Outlet />
        {breedInfo !== null && <BreedInfo breedInfo={breedInfo} />}
        {error && <p>{error.message}</p>}
        {isloading && <Loader />}
      </>
    </>
  );
};
export default BreedDetails;
