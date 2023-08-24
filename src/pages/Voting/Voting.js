// import { useEffect, useState } from 'react';
// import Loader from 'components/Loader/Loader';
// import ImagesList from 'components/ImagesList/ImagesList';
// import { getCatsForVouting } from 'services/getCat-api';

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
    <div>
      Voting page
      <div>
        <div>
          <button>GoBackBtn</button>
          <p>Cuttent page</p>
        </div>
      </div>
    </div>
  );
};

export default Voting;
