import Home from '../pages/Home/Home';
import Breeds from '../pages/Breeds/Breeds';
import Voting from '../pages/Voting/Voting';
import Gallery from '../pages/Gallery/Gallery';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/gallery" element={<Gallery />} />
          {/* <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
};
