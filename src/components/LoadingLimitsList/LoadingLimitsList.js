export const LoadingLimitsList = ({ onClick }) => {
  const handleButtonClicked = limit => {
    onClick(limit);
  };

  const limits = [5, 10, 15, 20];

  return (
    <ul>
      {limits.map(limit => (
        <li key={limit}>
          <button onClick={() => handleButtonClicked(limit)}>
            Limit: {limit}
          </button>
        </li>
      ))}
    </ul>
  );
};
