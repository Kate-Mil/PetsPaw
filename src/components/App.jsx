import Home from '../pages/Home/Home';

import Breeds from '../pages/Breeds/Breeds';
import Voting from '../pages/Voting/Voting';
import Gallery from '../pages/Gallery/Gallery';
import Layout from './Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import GlobalStyle from './GlobalStyles';
import Search from 'pages/Search/Search';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/voting" element={<Voting />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
};
