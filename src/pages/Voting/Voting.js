// import { useEffect, useState } from 'react';
// import Loader from 'components/Loader/Loader';
// import ImagesList from 'components/ImagesList/ImagesList';

import { PageNavMarkers } from 'components/PageNavMarkers/PageNavMarkers';
import { Outlet } from 'react-router-dom';

const Voting = () => {
  // const [images, setImages] = useState([]);
  // const [isloading, setIsloading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     setIsloading(true);
  //     try {
  //       const data = await getCatsForVouting();
  //       console.log(data);
  //       setImages(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsloading(false);
  //     }
  //   }

  //   fetchData();
  // }, []);

  return (
    <>
      <PageNavMarkers />
      <Outlet />
    </>
  );
};

export default Voting;
