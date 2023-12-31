import ImagesList from 'components/ImagesList/ImagesList';
import Loader from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCatsImagesByBreed } from 'services/getCat-api';
import { PageNavMarkers } from 'components/PageNavMarkers/PageNavMarkers';
import { SearchBreed, SearchString } from './Search.styled';

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
        const limit = '100';
        const data = await getCatsImagesByBreed(searchQuery, limit);
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
      <PageNavMarkers />
      <SearchString>
        Search results for: <SearchBreed>{query}</SearchBreed>
      </SearchString>
      {images.length > 0 && <ImagesList images={images} />}
      {error && <p>{error.message}</p>}
      {isloading && <Loader />}
    </>
  );
};
export default Search;
