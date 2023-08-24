import image1 from '../../pictures/vote-table@1x.png';
import image2 from '../../pictures/vote-table@2x.png';
import image3 from '../../pictures/pet-breeds@1x.png';
import image4 from '../../pictures/pet-breeds@2x.png';
import image5 from '../../pictures/images-search@1x.png';
import image6 from '../../pictures/images-search@2x.png';
import sprite from '../../pictures/sprite.svg';
import { NavLink } from 'react-router-dom';
import {
  AppBarWrapper,
  BreedsPicture,
  GalleryPicture,
  List,
  Logo,
  StyledDesc,
  Styledlink,
  SubTitle,
  Text,
  Title,
  VotingPicture,
} from './AppBar.styled';

const AppBar = () => {
  return (
    <>
      <AppBarWrapper>
        <Logo>
          <NavLink to="/">
            <svg width="104" height="24">
              <use href={`${sprite}#Logo`}></use>
            </svg>
          </NavLink>
        </Logo>
        <Title>Hi!👋</Title>
        <Text>Welcome to MacPaw Bootcamp 2023</Text>
        <SubTitle>Lets start using The Cat API</SubTitle>
        <List>
          <li>
            <Styledlink to="/voting">
              <VotingPicture>
                <source
                  srcSet={`${image1} 1x, ${image2} 2x`}
                  type="image/png"
                />
                <img src="{image1}" alt="note" loading="lazy" />
              </VotingPicture>
              <StyledDesc>voting</StyledDesc>
            </Styledlink>
          </li>
          <li>
            <Styledlink to="/breeds">
              <BreedsPicture>
                <source
                  srcSet={`${image3} 1x, ${image4} 2x`}
                  type="image/png"
                />

                <img src="{image3}" alt="cat" loading="lazy" />
              </BreedsPicture>
              <StyledDesc>breeds</StyledDesc>
            </Styledlink>
          </li>
          <li>
            <Styledlink to="/gallery">
              <GalleryPicture>
                <source
                  srcSet={`${image5} 1x, ${image6} 2x`}
                  type="image/png"
                />

                <img src="{image5}" alt="hand with device" loading="lazy" />
              </GalleryPicture>
              <StyledDesc>gallery</StyledDesc>
            </Styledlink>
          </li>
        </List>
      </AppBarWrapper>
    </>
  );
};

export default AppBar;
