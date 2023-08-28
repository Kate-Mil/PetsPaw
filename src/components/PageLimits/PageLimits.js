import { useNavigate, useSearchParams } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import sprite from '../../pictures/sprite.svg';
import {
  Title,
  List,
  Item,
  Wrapper,
  Container,
  CloseBtn,
  Img,
  SortedCategory,
} from './PageLimits.styled';

export const PageLimits = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPageLimit, setSelectedPageLimit] = useState('');
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();

  const [, setSearchParams] = useSearchParams();

  const handleButtonClicked = perPage => {
    setSearchParams({ perPage });
    navigate(`?page=${encodeURIComponent(perPage)}`);
    setSelectedPageLimit(perPage);
    setIsOpen(false);
  };

  const pages = [5, 10, 15, 20];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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

  return (
    <Container>
      <Title>limit</Title>
      <Wrapper ref={containerRef} onClick={toggleDropdown}>
        <SortedCategory>
          {' '}
          {selectedPageLimit ? (
            <p>{selectedPageLimit} items per page</p>
          ) : (
            '5 items per page'
          )}
        </SortedCategory>
        <CloseBtn type="button" isOpen={isOpen} onClick={toggleDropdown}>
          <Img width="12" height="12">
            <use href={`${sprite}#dropdown`}></use>
          </Img>
        </CloseBtn>
      </Wrapper>
      <List ref={listRef} isOpen={isOpen}>
        {pages.map(perPage => (
          <li key={perPage}>
            <Item onClick={() => handleButtonClicked(perPage)}>
              {perPage} items per page
            </Item>
          </li>
        ))}
      </List>
    </Container>
  );
};
