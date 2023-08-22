import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';

const Breeds = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  console.log(query);

  return (
    <div>
      <div>
        <SearchForm />
        <div>кнопки </div>
      </div>
      <div>
        <button>GoBackBtn</button>
        <p>Cuttent page</p>
        <ul>All breeds list</ul>
      </div>
    </div>
  );
};

export default Breeds;
