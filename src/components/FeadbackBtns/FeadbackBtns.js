import { Img, StyledLink, Wrapper } from './FeadbackBtns.styled';
import sprite from '../../pictures/sprite.svg';

const FeatbackBtns = () => {
  return (
    <>
      <div>
        <Wrapper>
          <li>
            <StyledLink to="/likes">
              <Img width="30" height="30">
                <use href={`${sprite}#like`}></use>
              </Img>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/favourites">
              <Img width="30" height="30">
                <use href={`${sprite}#fav`}></use>
              </Img>
            </StyledLink>
          </li>
          <li>
            <StyledLink to="/dislike">
              <Img width="30" height="30">
                <use href={`${sprite}#dislike`}></use>
              </Img>
            </StyledLink>
          </li>
        </Wrapper>
      </div>
    </>
  );
};
export default FeatbackBtns;
