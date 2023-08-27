import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
export const List = styled.ul`
  display: flex;
  gap: 7px;
`;

export const Button = styled.button`
  display: block;
  width: 83px;
  height: 80px;
  border-radius: 20px;
  padding: 15px;
  color: #fff;

  transition: background-color 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    color 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:active {
    background: #ff868e;
    color: #fff;
  }
`;

export const LikeBnt = styled(Button)`
  background-color: #97eab9;
  &:hover {
    background-color: #97eab94d;
    color: #97eab9;
  }
`;
export const DislikeBnt = styled(Button)`
  background-color: #ffd280;
  &:hover {
    background-color: #ffd2804d;
    color: #ffd280;
  }
`;
export const FavouriteBnt = styled(Button)`
  background-color: #ff868e;
  &:hover {
    background-color: #ff868e4d;
    color:#ff868e;
  }
  

  }
`;

export const Img = styled.svg`
  fill: currentColor;
`;
