import ImagesList from 'components/ImagesList/ImagesList';
import Loader from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCatsImagesByBreed } from 'services/getCat-api';

const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  const [images, setImages] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const searchQuery = query.slice(0, 4);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getCatsImagesByBreed(searchQuery);
        if (data.length === 0) {
          window.alert('Oops, something went wrong. Please try again.');
        } else {
          setImages(data);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, [searchQuery]);

  return (
    <>
      rere
      {images.length > 0 && <ImagesList images={images} />}
      {error && <p>{error.message}</p>}
      {isloading && <Loader />}
    </>
  );
};
export default Search;
