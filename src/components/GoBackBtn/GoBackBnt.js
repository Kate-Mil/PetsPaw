import { StyledLink, Img } from './GoBackBtn.styled';
import sprite from '../../pictures/sprite.svg';

export const GoBackBtn = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <StyledLink onClick={handleGoBack}>
      <Img width="20" height="20">
        <use href={`${sprite}#back`}></use>
      </Img>
    </StyledLink>
  );
};
