import { PageNavMarkers } from 'components/PageNavMarkers/PageNavMarkers';
import { Outlet } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { getAllVotes } from 'services/getCat-api';
// import Loader from 'components/Loader/Loader';
// import FeedbackList from 'components/FeedbackList/FeedbackList';

const Voting = () => {
  // const [feedbackInfo, setFeedbackInfo] = useState([]);
  // const [isloading, setIsloading] = useState(false);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     setIsloading(true);
  //     try {
  //       const data = await getAllVotes();
  //       console.log(data);
  //       setFeedbackInfo(data);
  //     } catch (error) {
  //       setError(error.message);
  //     } finally {
  //       setIsloading(false);
  //     }
  //   }

  //   fetchData();
  // }, []);

  // const lastVotedPuctureUrl = feedbackInfo[0].image.url;

  return (
    <>
      <PageNavMarkers />
      <Outlet />
      {/* {feedbackInfo ? (
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
            src={lastVotedPuctureUrl}
            alt="cat"
          />
        </div>
      ) : (
        <p>N/A</p>
      )} */}
      {/* {feedbackInfo.length > 0 ? (
        <FeedbackList feedbackInfo={feedbackInfo} />
      ) : (
        `Ooops, there is no reactions so far `
      )}
      {error && <p>{error.message}</p>}
      {isloading && <Loader />} */}
    </>
  );
};

export default Voting;
