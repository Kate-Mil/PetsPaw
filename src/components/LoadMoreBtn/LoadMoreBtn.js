import sprite from '../../pictures/sprite.svg';
import { Button, Img } from './LoadMoreBtn.styled';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <>
      <Button type="button" onClick={onClick}>
        <Img width="20" height="20">
          <use href={`${sprite}#update`}></use>
        </Img>
      </Button>
    </>
  );
};
