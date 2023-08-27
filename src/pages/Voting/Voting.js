// import { useEffect, useState } from 'react';
// import Loader from 'components/Loader/Loader';
// import ImagesList from 'components/ImagesList/ImagesList';

import { PageNavMarkers } from 'components/PageNavMarkers/PageNavMarkers';
import { Outlet } from 'react-router-dom';

const Voting = () => {
  return (
    <>
      <PageNavMarkers />
      <Outlet />
    </>
  );
};

export default Voting;
