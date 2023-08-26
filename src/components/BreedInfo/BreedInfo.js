import { useState } from 'react';

export const BreedInfo = ({ breedInfo }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const [data] = breedInfo.map(el => el.breeds);
  const { name, description, temperament, origin, weight, life_span } = data[0];

  return (
    <>
      <div style={{ width: '640px', padding: '20px' }}>
        <button
          onClick={handlePreviousImage}
          disabled={currentImageIndex === 0}
        >
          Previous
        </button>
        <img
          style={{ width: '100%', height: 'avto', objectFit: 'cover' }}
          src={breedInfo[currentImageIndex].url}
          alt=""
        />
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
    </>
  );
};
