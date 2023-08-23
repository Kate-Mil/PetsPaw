import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';

const Voting = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  console.log(query);

  return (
    <div>
      Voting page
      <div>
        <SearchForm />
        <div>кнопки </div>
      </div>
    </div>
  );
};

export default Voting;
