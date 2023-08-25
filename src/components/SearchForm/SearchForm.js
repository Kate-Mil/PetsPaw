import { useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import sprite from '../../pictures/sprite.svg';
import {
  SearchFormButton,
  SearchFormInput,
  SearchFormWrapper,
  Img,
} from './SearchForm.styled';

const SearchForm = () => {
  const [, setSearchParams] = useSearchParams();
  const formRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.query.value.toLowerCase().trim();

    if (!query) {
      return;
    }

    setSearchParams({ query });
    formRef.current.reset();
    navigate(`/search?query=${encodeURIComponent(query)}`);
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
        <Img width="20" height="20">
          <use href={`${sprite}#search`}></use>
        </Img>
      </SearchFormButton>
    </SearchFormWrapper>
  );
};

export default SearchForm;
