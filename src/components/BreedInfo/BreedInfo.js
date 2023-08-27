import { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import SimpleSlider from 'components/Slider/Slider';

export const BreedInfo = ({ breedInfo }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedBreed, setSelectedBreed] = useState(
    breedInfo[currentImageIndex]
  );
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedBreed(breedInfo[currentImageIndex]);
  }, [currentImageIndex, breedInfo]);

  const handleNextImage = () => {
    if (currentImageIndex < breedInfo.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePreviousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const { breeds, id } = selectedBreed;
  console.log({ id });
  const { name, description, temperament, origin, weight, life_span } =
    breeds[0];

  const handleImageClick = () => {
    const data = { id, url: selectedBreed.url };
    const encodedData = encodeURIComponent(JSON.stringify(data));
    navigate(`/voting/${encodedData}`);
  };

  const encodedData = encodeURIComponent(
    JSON.stringify({ id, url: selectedBreed.url })
  );

  return (
    <>
      <div style={{ width: '640px', padding: '20px' }}>
        <button
          onClick={handlePreviousImage}
          disabled={currentImageIndex === 0}
        >
          Previous
        </button>
        <NavLink to={`/voting/${encodedData}`}>
          <img
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            src={selectedBreed.url}
            alt="cat"
            onClick={handleImageClick}
          />
        </NavLink>
        <button
          onClick={handleNextImage}
          disabled={currentImageIndex === breedInfo.length - 1}
        >
          Next
        </button>
      </div>

      <h1>{name}</h1>
      <h2>{description}</h2>
      <p>
        Temperament: <span>{temperament}</span>
      </p>
      <p>
        Origin: <span>{origin}</span>
      </p>
      <p>
        Weight: <span>{weight.metric} kg</span>
      </p>
      <p>
        Life span: <span>{life_span} years</span>
      </p>
      <div style={{ height: '500px' }}>
        <SimpleSlider breedInfo={breedInfo} />
      </div>
    </>
  );
};
