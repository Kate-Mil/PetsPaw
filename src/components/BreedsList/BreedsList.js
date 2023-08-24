export const BreedsList = ({ breeds }) => {
  return (
    <>
      <ul>
        {breeds &&
          breeds.map(({ id, name }) => (
            <li key={id}>
              <button>{name}</button>
            </li>
          ))}
      </ul>
    </>
  );
};
