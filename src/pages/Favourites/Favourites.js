import { PageNavMarkers } from 'components/PageNavMarkers/PageNavMarkers';
import { useState, useEffect } from 'react';
import { getAllFavourites } from 'services/getCat-api';
import Loader from 'components/Loader/Loader';
import ImagesList from 'components/ImagesList/ImagesList';

const Favourites = () => {
  const [feedbackInfo, setFeedbackInfo] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getAllFavourites();
        console.log(data);
        setFeedbackInfo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, []);

  const likes = feedbackInfo.map(el => el.image);

  return (
    <>
      <PageNavMarkers />
      <>
        {isloading ? (
          <Loader />
        ) : likes.length > 0 ? (
          <ImagesList images={likes} />
        ) : (
          <p>No item found</p>
        )}
        {error && <p>{error.message}</p>}
      </>
    </>
  );
};
export default Favourites;
