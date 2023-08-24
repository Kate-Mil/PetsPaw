import styled from 'styled-components';

export const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  max-width: 680px;
  padding: 104px 20px;
`;

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ gridArea }) => gridArea && `grid-area: ${gridArea};`}
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
