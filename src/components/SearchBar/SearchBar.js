import SearchForm from 'components/SearchForm/SearchForm';
import FeatbackBtns from 'components/FeadbackBtns/FeadbackBtns';
import { Wrapper } from './SearchBar.styled';

const SearchBar = () => {
  return (
    <>
      <Wrapper>
        <SearchForm />
        <FeatbackBtns />
      </Wrapper>
    </>
  );
};
export default SearchBar;
