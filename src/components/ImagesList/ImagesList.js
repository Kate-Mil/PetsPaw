export default function ImagesList({ images }) {
  console.log(images);
  return (
    <ul>
      {images &&
        images.map(({ id, url }) => (
          <li key={id}>
            <img src={url} alt="note" height="32" loading="lazy" />
          </li>
        ))}
    </ul>
  );
}
