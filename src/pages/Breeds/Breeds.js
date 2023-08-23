import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import Loader from 'components/Loader/Loader';
import ImagesList from 'components/ImagesList/ImagesList';
import { getAllCats, getCatsImagesByBreed } from 'services/getCat-api';

const Breeds = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  console.log(query);
  const [images, setImages] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getAllCats();
        setImages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getCatsImagesByBreed(query);
        setImages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, [query]);

  return (
    <div>
      <div>
        <SearchForm />
        <div>кнопки </div>
      </div>
      <div>
        <button>GoBackBtn</button>
        <p>Cuttent page</p>
        {images.length > 0 && <ImagesList images={images} />}
        {error && <p>{error.message}</p>}
        {isloading && <Loader />}
      </div>
    </div>
  );
};

export default Breeds;
