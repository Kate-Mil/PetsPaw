import Home from '../pages/Home/Home';
import Breeds from '../pages/Breeds/Breeds';
import Voting from '../pages/Voting/Voting';
import Gallery from '../pages/Gallery/Gallery';
import Layout from './Layout/Layout';
import Search from '../pages/Search/Search';
import Likes from '../pages/Likes/Likes';
import Dislikes from '../pages/Dislikes/Dislikes';
import Favourites from '../pages/Favourites/Favourites';
import VotingInfo from '../pages/VotingInfo/VotingInfo';
import BreedDetails from 'pages/BreedDetails/BreedDetails';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import SortedGallery from 'pages/SortedGallery.js/SortedGallery';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/breeds/:id" element={<BreedDetails />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/voting/:data" element={<VotingInfo />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:data" element={<SortedGallery />} />
          <Route path="/search" element={<Search />} />
          <Route path="/likes" element={<Likes />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/dislike" element={<Dislikes />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
};
