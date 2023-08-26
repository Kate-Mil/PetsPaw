export const BreedInfo = ({ breedInfo }) => {
  console.log(breedInfo);
  const [data] = breedInfo.breeds;
  const { name, description, temperament, origin, weight, life_span } = data;
  return (
    <>
      <img src={breedInfo.url} alt="" />
      <h1>{name}</h1>
      <h2>{description}</h2>
      <p>
        Temperament:<span>{temperament}</span>
      </p>
      <p>
        Origin:<span>{origin}</span>
      </p>
      <p>
        Weight:<span>{weight.metric} kg</span>
      </p>
      <p>
        Life span:<span>{life_span} years</span>
      </p>
    </>
  );
};
