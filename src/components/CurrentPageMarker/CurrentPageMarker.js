import { useLocation } from 'react-router-dom';
import { Text } from './CurrentPageMarker.styled';

export const CurrentPageMarker = () => {
  const location = useLocation();
  const parts = location.pathname.split('/');
  const currentPage = parts[parts.length - 1];

  return (
    <>
      <Text>{currentPage}</Text>
    </>
  );
};
