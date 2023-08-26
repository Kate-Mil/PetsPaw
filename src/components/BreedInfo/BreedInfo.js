export const BreedInfo = ({ breedInfo }) => {
  const [data] = breedInfo.map(el => el.breeds);
  const { name, description, temperament, origin, weight, life_span } = data[0];

  return (
    <>
      <div>
        <ul>
          {breedInfo.map(({ id, url }) => (
            <li key={id}>
              <img src={url} alt="" />
            </li>
          ))}
        </ul>
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
