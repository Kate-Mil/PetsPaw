import sprite from '../../pictures/sprite.svg';
import { Button, Img } from './OpenModalBtn.styled';

export const OpenModalBtn = () => {
  return (
    <>
      <Button type="button">
        <Img width="20" height="20">
          <use href={`${sprite}#upload`}></use>
        </Img>
      </Button>
    </>
  );
};
