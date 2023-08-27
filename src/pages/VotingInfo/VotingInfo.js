import { PageNavMarkers } from 'components/PageNavMarkers/PageNavMarkers';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { FeadbackList } from '../../components/FeadbackList/FeadbackList';
import { VoteBtns } from '../../components/VoteBtns/VoteBtns';
import { getAllVotes } from 'services/getCat-api';
import Loader from 'components/Loader/Loader';

const VotingInfo = () => {
  const [feadbackInfo, setFeadbackInfo] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const { data } = useParams();
  const { id, url } = JSON.parse(decodeURIComponent(data));
  console.log({ id, url });
  const parentPageTitle = 'voting';

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getAllVotes();
        console.log(data);
        setFeadbackInfo(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <PageNavMarkers parentPageTitle={parentPageTitle} />
      <div
        style={{
          width: '640px',
          padding: '20px',
          height: '360px',
        }}
      >
        <img
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '20px',
          }}
          src={url}
          alt="cat"
        />
      </div>
      <VoteBtns image_id={id} />
      {feadbackInfo.length > 0 ? (
        <FeadbackList featbackInfo={feadbackInfo} />
      ) : (
        `There was no reactions found for Image ID: ${id}`
      )}
      {error && <p>{error.message}</p>}
      {isloading && <Loader />}
    </>
  );
};
export default VotingInfo;
