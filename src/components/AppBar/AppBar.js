import image1 from '../../pictures/vote-table@1x.png';
import image2 from '../../pictures/vote-table@2x.png';
import image3 from '../../pictures/pet-breeds@1x.png';
import image4 from '../../pictures/pet-breeds@2x.png';
import image5 from '../../pictures/images-search@1x.png';
import image6 from '../../pictures/images-search@2x.png';
import { NavLink } from 'react-router-dom';

const AppBar = () => {
  return (
    <>
      <header>
        <NavLink to="/">
          <svg width="24" height="24">
            <use xlinkHref="#"></use>
          </svg>
          PetsPaw
        </NavLink>
        <p>Hi!👋</p>
        <p>Welcome to MacPaw Bootcamp 2023</p>
        <p>Lets start using The Cat API</p>
        <ul>
          <li>
            <NavLink to="/voting">
              <button>
                <picture>
                  <source
                    srcSet={`${image1} 1x, ${image2} 2x`}
                    type="image/png"
                  />

                  <img src="{image1}" alt="note" height="32" loading="lazy" />
                </picture>
                voting
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/breeds">
              <button>
                <picture>
                  <source
                    srcSet={`${image3} 1x, ${image4} 2x`}
                    type="image/png"
                  />

                  <img src="{image3}" alt="cat" height="32" loading="lazy" />
                </picture>
                breeds
              </button>
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery">
              <button>
                <picture>
                  <source
                    srcSet={`${image5} 1x, ${image6} 2x`}
                    type="image/png"
                  />

                  <img
                    src="{image5}"
                    alt="hand with device"
                    height="32"
                    loading="lazy"
                  />
                </picture>
                gallery
              </button>
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default AppBar;
