import sprite from '../../pictures/sprite.svg';
import { Button, Img } from './LoadMoreBtn.styled';

export const LoadMoreBtn = () => {
  return (
    <>
      <Button type="button">
        <Img width="20" height="20">
          <use href={`${sprite}#soft-revert`}></use>
        </Img>
      </Button>
    </>
  );
};
