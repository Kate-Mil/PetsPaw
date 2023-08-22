import image1 from '../../pictures/girl-and-pet@1x.png';
import image2 from '../../pictures/girl-and-pet@2x.png';

const Home = () => {
  return (
    <div>
      <picture>
        <source srcSet={`${image1} 1x, ${image2} 2x`} type="image/png" />

        <img
          src="{image1}"
          alt="girl-and-pet"
          width="775px"
          height="900px"
          loading="lazy"
        />
      </picture>
    </div>
  );
};

export default Home;
