import {
  ImageWrapper,
  StyledItem,
  StyledList,
  StyledImg,
} from './ImagesList.styled';

export default function ImagesList({ images, onImageClick }) {
  const getGridArea = index => {
    const patterns = [
      [1, 1, 3, 2],
      [1, 2, 2, 3],
      [1, 3, 2, 4],
      [3, 1, 4, 2],
      [2, 2, 4, 4],
      [4, 1, 5, 2],
      [4, 2, 5, 3],
      [4, 3, 6, 4],
      [5, 1, 7, 3],
      [6, 3, 7, 4],
    ];

    const basePattern = patterns[index % 10];

    const offset = 6 * Math.floor(index / 10);
    const generatedPattern = basePattern.map((val, idx) => {
      if (idx % 2 === 0) return val + offset;
      return val;
    });

    return `${generatedPattern[0]} / ${generatedPattern[1]} / ${generatedPattern[2]} / ${generatedPattern[3]}`;
  };

  return (
    <StyledList>
      {images &&
        images.map(({ id, url }, index) => {
          return (
            <StyledItem key={id} gridArea={getGridArea(index)}>
              <ImageWrapper onClick={() => onImageClick(id)}>
                <StyledImg src={url} alt="cat" loading="lazy" />
              </ImageWrapper>
            </StyledItem>
          );
        })}
    </StyledList>
  );
}
