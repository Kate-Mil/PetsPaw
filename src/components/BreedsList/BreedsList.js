import { useEffect, useState } from 'react';
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

  const allBreeds = breeds.map(el => ({ name: el.name, id: el.id }));

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Wrapper onClick={toggleDropdown}>
        <Title>All breeds</Title>
        <CloseBtn type="button" isOpen={isOpen} onClick={toggleDropdown}>
          <Img width="12" height="12">
            <use href={`${sprite}#dropdown`}></use>
          </Img>
        </CloseBtn>
      </Wrapper>
      <List isOpen={isOpen}>
        {allBreeds.map(({ id, name }) => (
          <li key={id}>
            <Item onClick={() => onClick(id)}>{name}</Item>
          </li>
        ))}
        {error && <p>{error.message}</p>}
        {isloading && <p>Loading...</p>}
      </List>
    </Container>
  );
};
