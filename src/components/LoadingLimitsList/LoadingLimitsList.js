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
} from './LoadingLimitsList.styled';

export const LoadingLimitsList = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const listRef = useRef(null);

  const handleButtonClicked = limit => {
    onClick(limit);
    setIsOpen(false);
  };

  const limits = [5, 10, 15, 20];

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
      <Wrapper ref={containerRef} onClick={toggleDropdown}>
        <Title>Limit</Title>
        <CloseBtn type="button" isOpen={isOpen} onClick={toggleDropdown}>
          <Img width="12" height="12">
            <use href={`${sprite}#dropdown`}></use>
          </Img>
        </CloseBtn>
      </Wrapper>
      <List ref={listRef} isOpen={isOpen}>
        {limits.map(limit => (
          <li key={limit}>
            <Item onClick={() => handleButtonClicked(limit)}>
              Limit: {limit}
            </Item>
          </li>
        ))}
      </List>
    </Container>
  );
};
