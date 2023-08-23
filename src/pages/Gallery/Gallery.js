import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';

const Gallery = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  console.log(query);
  return (
    <div>
      Gallery page
      <div>
        <SearchForm />
        <div>кнопки </div>
      </div>
    </div>
  );
};

export default Gallery;
