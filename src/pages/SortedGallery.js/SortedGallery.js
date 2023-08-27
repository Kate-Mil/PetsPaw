import { PageNavMarkers } from 'components/PageNavMarkers/PageNavMarkers';
// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { getAllVotes } from 'services/getCat-api';
// import Loader from 'components/Loader/Loader';

const SortedGallery = () => {
  // const [breeds, setBreeds] = useState([]);
  // const [isloading, setIsloading] = useState(false);
  // const [error, setError] = useState(null);
  // const [limit, setLimit] = useState('10');
  // const [breedId, setBreedId] = useState('abys'); //??? не срабатывает запрос
  // const [order, setOrder] = useState('RAND');
  // const [type, setType] = useState('Animated'); //????
  // const [page, setPage] = useState(0);
  // const [has_breeds, setHas_breeds] = useState(1);
  //   const { data } = useParams();
  //   const { id, url } = JSON.parse(decodeURIComponent(data));
  const parentPageTitle = 'gallary';

  // useEffect(() => {
  //   async function fetchData() {
  //     setIsloading(true);
  //     try {
  //       const data = await getAllCats(
  //         limit,
  //         order,
  //         has_breeds,
  //         type,
  //         page,
  //         breedId
  //       );
  //       console.log('Fetch AllCats', data);
  //       setBreeds(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsloading(false);
  //     }
  //   }

  //   fetchData();
  // }, [limit, order, has_breeds, type, page, breedId]);

  return (
    <>
      <PageNavMarkers parentPageTitle={parentPageTitle} />
      <>Hello SortedGallery</>
      {/*       
      {error && <p>{error.message}</p>}
      {isloading && <Loader />} */}
    </>
  );
};
export default SortedGallery;
