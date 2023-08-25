import { useState } from 'react';
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

  const handleButtonClicked = limit => {
    onClick(limit);
  };

  const limits = [5, 10, 15, 20];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <Wrapper onClick={toggleDropdown}>
        <Title>Limit</Title>
        <CloseBtn type="button" isOpen={isOpen} onClick={toggleDropdown}>
          <Img width="12" height="12">
            <use href={`${sprite}#dropdown`}></use>
          </Img>
        </CloseBtn>
      </Wrapper>
      <List isOpen={isOpen}>
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
