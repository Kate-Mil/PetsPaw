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
} from './SorterByOrder.styled';

export const SorterByOrder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();

  const [, setSearchParams] = useSearchParams();

  const handleButtonClicked = orderCategory => {
    setSearchParams({ orderCategory });
    navigate(`?order=${encodeURIComponent(orderCategory)}`);

    setIsOpen(false);
  };

  const order = [{ ASC: 'ASC' }, { DESC: 'DESC' }, { RAND: 'Random' }];

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
      <Title>Order</Title>
      <Wrapper ref={containerRef} onClick={toggleDropdown}>
        <CloseBtn type="button" isOpen={isOpen} onClick={toggleDropdown}>
          <Img width="12" height="12">
            <use href={`${sprite}#dropdown`}></use>
          </Img>
        </CloseBtn>
      </Wrapper>
      <List ref={listRef} isOpen={isOpen}>
        {order.map(orderCategoryObj => {
          const orderCategoryValue = Object.keys(orderCategoryObj)[0];
          const orderCategoryLabel = orderCategoryObj[orderCategoryValue];

          return (
            <li key={orderCategoryValue}>
              <Item onClick={() => handleButtonClicked(orderCategoryValue)}>
                {orderCategoryLabel}
              </Item>
            </li>
          );
        })}
      </List>
    </Container>
  );
};
