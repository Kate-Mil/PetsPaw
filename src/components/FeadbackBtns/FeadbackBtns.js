import { NavLink } from 'react-router-dom';
import { Img, Item, StyledLink, Wrapper } from './FeadbackBtns.styled';
import sprite from '../../pictures/sprite.svg';

const FeatbackBtns = () => {
  return (
    <>
      <div>
        <Wrapper>
          <Item>
            <StyledLink to="/likes">
              <Img width="30" height="30">
                <use href={`${sprite}#like`}></use>
              </Img>
            </StyledLink>
          </Item>
          <Item>
            <NavLink to="/favourites">
              <svg width="30" height="30">
                <use href={`${sprite}#fav`}></use>
              </svg>
            </NavLink>
          </Item>
          <Item>
            <NavLink to="/dislike">
              <svg width="30" height="30">
                <use href={`${sprite}#dislike`}></use>
              </svg>
            </NavLink>
          </Item>
        </Wrapper>
      </div>
    </>
  );
};
export default FeatbackBtns;
