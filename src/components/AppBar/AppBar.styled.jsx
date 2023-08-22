import styled from 'styled-components';

export const Logo = styled.div`
  margin-bottom: 80px;
`;

export const Title = styled.h1`
  font-size: 44px;
  font-weight: 500;
  line-height: 58px;
  margin-bottom: 10px;
`;
export const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 20px;
`;

export const Text = styled(SubTitle)`
  color: #8c8c8c;
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 60px;
`;

export const AppBarWrapper = styled.header`
  max-width: 446px;
  //   height: 544px;
  border-radius: 20px;
`;

export const List = styled.ul`
  display: flex;
  gap: 16px;
`;

export const PictureWrapper = styled.picture`
  width: 138px;
  height: 198px;
  border-radius: 20px;
  margin-bottom: 10px;
  border: 4px solid rgba(255, 255, 255, 0.6);
`;

export const VotingPicture = styled(PictureWrapper)`
  background: #b4b7ff;
  padding: 33px 15px;
`;

export const BreedsPicture = styled(PictureWrapper)`
  background: #97eab9;
  padding: 13px 7px 14px 6px;
`;
export const GalleryPicture = styled(PictureWrapper)`
  background: #ffd280;
  padding: 0 9px;
`;

export const StyledDesc = styled.p`
  text-transform: uppercase;
  color: #ff868e;
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 2px;
  width: 138px;
  height: 36px;
  border-radius: 10px;
  background-color: #fff;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const StyledButton = styled.button`
  &:hover ${PictureWrapper} {
    border: 4px solid #fff;
  }

  &:hover ${StyledDesc} {
    background: #fbe0dc;
  }

  &:active ${PictureWrapper} {
    border: 4px solid #fbe0dc;
  }

  &:active ${StyledDesc} {
    background: #ff868e;
    color: #fff;
  }
`;
