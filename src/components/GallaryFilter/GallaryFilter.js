import { PageLimits } from 'components/PageLimits/PageLimits';
import { SorterByOrder } from 'components/SorterByOrder/SorterByOrder';
import { LoadMoreBtn } from 'components/LoadMoreBtn/LoadMoreBtn';
import { SorterByImageType } from 'components/SorterByImageType/SorterByImageType';
import { Container, Wrapper } from './GalleryFilter.styled';
import { GalleryBreedsList } from 'components/GalleryBreedsList/GalleryBreedsList';

export const GalleryFilter = () => {
  return (
    <Container>
      <Wrapper>
        <SorterByOrder />
        <SorterByImageType />
      </Wrapper>
      <Wrapper>
        <GalleryBreedsList />
        <PageLimits />
        <LoadMoreBtn />
      </Wrapper>
    </Container>
  );
};
