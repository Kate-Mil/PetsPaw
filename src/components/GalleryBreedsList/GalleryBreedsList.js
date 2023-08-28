import { useEffect, useState, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAllBreeds } from 'services/getCat-api';
import {
  Title,
  List,
  Item,
  Wrapper,
  Container,
  CloseBtn,
  Img,
  SortedCategory,
} from './GalleryBreedsList.styled';
import sprite from '../../pictures/sprite.svg';

// const initialData = {
//   breedId: '',
//   order: 'RAND',
//   has_breeds: 1,
//   page: 0,
// };

export const GalleryBreedsList = () => {
  const [breeds, setBreeds] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();
  const [, setSearchParams] = useSearchParams();

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getAllBreeds();
        console.log({ data });
        setBreeds(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, []);

  const handleButtonClicked = breedId => {
    setSearchParams({ breedId });
    navigate(`?breedId=${encodeURIComponent(breedId)}`);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = event => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        listRef.current &&
        !listRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const allBreeds = breeds.map(el => ({ name: el.name, id: el.id }));

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Title>None</Title>
      <Wrapper ref={containerRef} onClick={toggleDropdown}>
        <SortedCategory>{categoryName ? categoryName : 'None'}</SortedCategory>
        <CloseBtn type="button" isOpen={isOpen} onClick={toggleDropdown}>
          <Img width="12" height="12">
            <use href={`${sprite}#dropdown`}></use>
          </Img>
        </CloseBtn>
      </Wrapper>
      <List ref={listRef} isOpen={isOpen}>
        {allBreeds.map(({ id, name }) => (
          <li key={id}>
            <Item
              onClick={() => {
                handleButtonClicked(id);
                setCategoryName(name);
              }}
            >
              {name}
            </Item>
          </li>
        ))}
        {error && <p>{error.message}</p>}
        {isloading && <p>Loading...</p>}
      </List>
    </Container>
  );
};
