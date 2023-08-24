import {
  ImageWrapper,
  StyledItem,
  StyledList,
  StyledImg,
} from './ImagesList.styled';

export default function ImagesList({ images }) {
  console.log(images);
  const gridAreas = [
    '1 / 1 / 3 / 2',
    '1 / 2 / 2 / 3',
    '1 / 3 / 2 / 4',
    '3 / 1 / 4 / 2',
    '2 / 2 / 4 / 4',
    '4 / 1 / 5 / 2',
    '4 / 2 / 5 / 3',
    '4 / 3 / 6 / 4',
    '5 / 1 / 7 / 3',
    '6 / 3 / 7 / 4',
  ];
  return (
    <StyledList>
      {images &&
        images.map(({ id, url }, index) => {
          return (
            <StyledItem key={id} gridArea={gridAreas[index]}>
              <ImageWrapper>
                <StyledImg src={url} alt="note" loading="lazy" />
              </ImageWrapper>
            </StyledItem>
          );
        })}
    </StyledList>
  );
}
