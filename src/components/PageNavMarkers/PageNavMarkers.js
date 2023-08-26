import { GoBackBtn } from 'components/GoBackBtn/GoBackBnt';
import { CurrentPageMarker } from 'components/CurrentPageMarker/CurrentPageMarker';
import { Wrapper } from './PageNavMarkers.styled';

export const PageNavMarkers = ({ parentPageTitle }) => {
  return (
    <>
      <Wrapper>
        <GoBackBtn />
        <CurrentPageMarker parentPageTitle={parentPageTitle} />
      </Wrapper>
    </>
  );
};
