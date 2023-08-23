import { Outlet, useLocation } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { LayoutWrapper, SectionWrapper } from './Layout.styled';

import SearchBar from 'components/SearchBar/SearchBar';

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <LayoutWrapper>
      <AppBar />
      <SectionWrapper>
        {!isHomePage && <SearchBar />}
        <Outlet />
      </SectionWrapper>
    </LayoutWrapper>
  );
};
export default Layout;
