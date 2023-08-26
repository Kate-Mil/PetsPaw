import { useEffect, useState, useRef } from 'react';
import { getAllBreeds } from 'services/getCat-api';
import {
  Title,
  List,
  Item,
  Wrapper,
  Container,
  CloseBtn,
  Img,
} from './BreedsList.styled';
import sprite from '../../pictures/sprite.svg';

export const BreedsList = ({ onClick }) => {
  const [breeds, setBreeds] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const containerRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      setIsloading(true);
      try {
        const data = await getAllBreeds();
        setBreeds(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, []);

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
  console.log({ allBreeds });
  let selectBreeds;
  if (categoryName === 'All breeds' || categoryName === '') {
    selectBreeds = allBreeds;
  } else {
    selectBreeds = [{ name: 'All breeds', id: 'all' }, ...allBreeds];
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Wrapper ref={containerRef} onClick={toggleDropdown}>
        <Title>{categoryName ? categoryName : 'All breeds'}</Title>
        <CloseBtn type="button" isOpen={isOpen} onClick={toggleDropdown}>
          <Img width="12" height="12">
            <use href={`${sprite}#dropdown`}></use>
          </Img>
        </CloseBtn>
      </Wrapper>
      <List ref={listRef} isOpen={isOpen}>
        {selectBreeds.map(({ id, name }) => (
          <li key={id}>
            <Item
              onClick={() => {
                onClick(id);
                setCategoryName(name);
                setIsOpen(false);
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
