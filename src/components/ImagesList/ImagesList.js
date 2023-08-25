import {
  ImageWrapper,
  StyledItem,
  StyledList,
  StyledImg,
} from './ImagesList.styled';

export default function ImagesList({ images, onImageClick }) {
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

  // const generateGridAreas = count => {
  //   const gridAreas = [
  //     '1 / 1 / 3 / 2',
  //     '1 / 2 / 2 / 3',
  //     '1 / 3 / 2 / 4',
  //     '3 / 1 / 4 / 2',
  //     '2 / 2 / 4 / 4',
  //     '4 / 1 / 5 / 2',
  //     '4 / 2 / 5 / 3',
  //     '4 / 3 / 6 / 4',
  //     '5 / 1 / 7 / 3',
  //     '6 / 3 / 7 / 4',
  //   ];

  //   const repeatedGridAreas = [];
  //   for (let i = 0; i < count; i++) {
  //     repeatedGridAreas.push(gridAreas[i % gridAreas.length]);
  //   }

  //   return repeatedGridAreas;
  // };

  // const repeatedGridAreas = generateGridAreas(images.length);

  return (
    <StyledList>
      {images &&
        images.map(({ id, url }, index) => {
          return (
            <StyledItem key={id} gridArea={gridAreas[index]}>
              <ImageWrapper onClick={() => onImageClick(id)}>
                <StyledImg src={url} alt="cat" loading="lazy" />
              </ImageWrapper>
            </StyledItem>
          );
        })}
    </StyledList>

    // <StyledList>
    //   {images &&
    //     images.map(({ id, url }, index) => {
    //       return (
    //         <StyledItem key={id} gridArea={repeatedGridAreas[index]}>
    //           <ImageWrapper>
    //             <StyledImg src={url} alt="note" loading="lazy" />
    //           </ImageWrapper>
    //         </StyledItem>
    //       );
    //     })}
    // </StyledList>
  );
}
