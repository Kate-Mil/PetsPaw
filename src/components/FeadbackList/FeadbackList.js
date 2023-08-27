export const FeadbackList = ({ featbackInfo }) => {
  return (
    <>
      <ul>
        {featbackInfo &&
          featbackInfo.map(({ image_id, created_at, value }) => (
            <li key={image_id}>
              <div>{created_at}</div>
              <p>
                Image ID: <span>{image_id}</span> was added to {value}
              </p>
              <svg>
                <use></use>
              </svg>
            </li>
          ))}
      </ul>
    </>
  );
};

export default FeadbackList;
