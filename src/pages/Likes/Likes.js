import ImagesList from 'components/ImagesList/ImagesList';
import { PageNavMarkers } from 'components/PageNavMarkers/PageNavMarkers';
import { useState, useEffect } from 'react';
import { getAllVotes } from 'services/getCat-api';
import Loader from 'components/Loader/Loader';

const Likes = () => {
  const [feedbackInfo, setFeedbackInfo] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getAllVotes();
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

  const likes = feedbackInfo.filter(el => el.value === 1).map(el => el.image);

  return (
    <>
      <PageNavMarkers />
      {likes.length > 0 ? <ImagesList images={likes} /> : <p>No item found</p>}
      {error && <p>{error.message}</p>}
      {isloading && <Loader />}
    </>
  );
};
export default Likes;
