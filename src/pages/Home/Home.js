import image1 from '../../pictures/girl-and-pet@1x.png';
import image2 from '../../pictures/girl-and-pet@2x.png';
import { Background, Img, PictureWrapper } from './Home.styled';

const Home = () => {
  return (
    <div>
      <PictureWrapper>
        <source srcSet={`${image1} 1x, ${image2} 2x`} type="image/png" />

        <Img
          src="{image1}"
          alt="girl-and-pet"
          width="775px"
          height="900px"
          loading="lazy"
        />
      </PictureWrapper>
      <Background />
    </div>
  );
};

export default Home;
