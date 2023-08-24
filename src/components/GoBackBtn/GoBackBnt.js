import { StyledLink } from './GoBackBtn.styled';
import sprite from '../../pictures/sprite.svg';

export const GoBackBtn = ({ path }) => {
  return (
    <StyledLink to={path}>
      <svg width="30" height="30">
        <use href={`${sprite}#back`}></use>
      </svg>
    </StyledLink>
  );
};
