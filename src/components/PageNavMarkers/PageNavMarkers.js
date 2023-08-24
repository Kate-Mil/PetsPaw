import { GoBackBtn } from 'components/GoBackBtn/GoBackBnt';
import { CurrentPageMarker } from 'components/CurrentPageMarker/CurrentPageMarker';
import { Wrapper } from './PageNavMarkers.styled';

export const PageNavMarkers = () => {
  return (
    <>
      <Wrapper>
        <GoBackBtn />
        <CurrentPageMarker />
      </Wrapper>
    </>
  );
};
