import { useState } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';

const Gallery = () => {
  const [query, setQuery] = useState('');

  const formSubmitHandler = searchForm => {
    setQuery(searchForm);
  };
  console.log(query);
  return (
    <div>
      Gallery page
      <div>
        <SearchForm onSubmit={formSubmitHandler} />
        <div>кнопки </div>
      </div>
    </div>
  );
};

export default Gallery;
