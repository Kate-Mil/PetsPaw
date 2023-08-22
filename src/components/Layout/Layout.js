import { Outlet } from 'react-router-dom';
import AppBar from '../AppBar/AppBar';
import { LayoutWrapper } from './Layout.styled';

const Layout = () => {
  return (
    <LayoutWrapper>
      <AppBar />
      <Outlet />
    </LayoutWrapper>
  );
};
export default Layout;
