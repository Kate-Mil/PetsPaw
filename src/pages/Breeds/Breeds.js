import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import ImagesList from 'components/ImagesList/ImagesList';
import { PageNavMarkers } from 'components/PageNavMarkers/PageNavMarkers';
import { getAllBreeds } from 'services/getCat-api';

const Breeds = () => {
  const [images, setImages] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getAllBreeds();
        setImages(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <div>
        <PageNavMarkers />
        {images.length > 0 && <ImagesList images={images} />}
        {error && <p>{error.message}</p>}
        {isloading && <Loader />}
      </div>
    </div>
  );
};

export default Breeds;
