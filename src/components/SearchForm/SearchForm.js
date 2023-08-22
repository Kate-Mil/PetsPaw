import { useSearchParams } from 'react-router-dom';
import { useRef } from 'react';
import sprite from '../../pictures/sprite.svg';
import {
  SearchFormButton,
  SearchFormInput,
  SearchFormWrapper,
} from './SearchForm.styled';

const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();
  const formRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value.toLowerCase().trim();

    if (!query) {
      return;
    }
    setSearchParams({ query });
    formRef.current.reset();
  };

  return (
    <SearchFormWrapper onSubmit={handleSubmit} ref={formRef}>
      <SearchFormInput
        type="text"
        autoComplete="off"
        name="query"
        autoFocus
        placeholder="Search for breeds by name"
      />
      <SearchFormButton type="submit">
        <svg width="20" height="20">
          <use href={`${sprite}#search`}></use>
        </svg>
      </SearchFormButton>
    </SearchFormWrapper>
  );
};

export default SearchForm;
