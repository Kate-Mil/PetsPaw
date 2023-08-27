import { useNavigate } from 'react-router-dom';
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
} from './SorterByOrder.styled';

export const SorterByOrder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();

  const handleButtonClicked = orderCategory => {
    navigate(`?order=${orderCategory}`);

    setIsOpen(false);
  };

  const order = ['ASC', 'DESC', 'RAND'];

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
        <Title>Order</Title>
        <CloseBtn type="button" isOpen={isOpen} onClick={toggleDropdown}>
          <Img width="12" height="12">
            <use href={`${sprite}#dropdown`}></use>
          </Img>
        </CloseBtn>
      </Wrapper>
      <List ref={listRef} isOpen={isOpen}>
        {order.map(orderCategory => (
          <li key={orderCategory}>
            <Item onClick={() => handleButtonClicked(orderCategory)}>
              {orderCategory}
            </Item>
          </li>
        ))}
      </List>
    </Container>
  );
};
