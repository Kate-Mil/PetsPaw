import sprite from '../../pictures/sprite.svg';
import { Button, Img } from './OpenModalBtn.styled';

export const OpenModalBtn = ({ onClick }) => {
  return (
    <>
      <Button type="button" onClick={onClick}>
        <Img width="20" height="20">
          <use href={`${sprite}#upload`}></use>
        </Img>
      </Button>
    </>
  );
};
