export const BreedInfo = ({ breedInfo }) => {
  console.log(breedInfo);
  return (
    <>
      <img src={breedInfo.url} alt="" />
      <h1>{}</h1>
      <h2>{}</h2>
      <p>
        Temperament:<span>{}</span>
      </p>
      <p>
        Origin:<span></span>
        {}
      </p>
      <p>
        Weight:<span></span>
        {}
      </p>
      <p>
        Life span:<span>{}</span>
      </p>
    </>
  );
};
