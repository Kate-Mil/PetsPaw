import { BreedsList } from 'components/BreedsList/BreedsList';
import { LoadingLimitsList } from 'components/LoadingLimitsList/LoadingLimitsList';
import { SorterByOrder } from 'components/SorterByOrder/SorterByOrder';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { SorterByImageType } from 'components/SorterByImageType/SorterByImageType';
import { Container, Wrapper } from './GalleryFilter.styled';

export const GalleryFilter = () => {
  return (
    <Container>
      <Wrapper>
        <SorterByOrder />
        <SorterByImageType />
      </Wrapper>
      <Wrapper>
        <BreedsList />

        <LoadingLimitsList />

        <LoadMoreBtn />
      </Wrapper>
    </Container>
  );
};
