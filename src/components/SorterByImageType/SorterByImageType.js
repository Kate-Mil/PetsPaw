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
} from './SorterByImageType.styled';

export const SorterByImageType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();

  const [, setSearchParams] = useSearchParams();

  const handleButtonClicked = typeCategory => {
    setSearchParams({ typeCategory });
    navigate(`?type=${encodeURIComponent(typeCategory)}`);
    setSelectedType(typeCategory);
    setIsOpen(false);
  };

  const types = [
    { All: 'All' },
    { Static: 'Static' },
    { Animated: 'Animated' },
  ];

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

  const findTypeLabelByValue = value => {
    const matchedType = types.find(typeCategoryObj => {
      const typeCategoryValue = Object.keys(typeCategoryObj)[0];
      return typeCategoryValue === value;
    });

    if (matchedType) {
      return Object.values(matchedType)[0];
    }

    return 'All';
  };

  return (
    <Container>
      <Title>Type</Title>
      <Wrapper ref={containerRef} onClick={toggleDropdown}>
        <SortedCategory>{findTypeLabelByValue(selectedType)}</SortedCategory>
        <CloseBtn type="button" isOpen={isOpen} onClick={toggleDropdown}>
          <Img width="12" height="12">
            <use href={`${sprite}#dropdown`}></use>
          </Img>
        </CloseBtn>
      </Wrapper>
      <List ref={listRef} isOpen={isOpen}>
        {types.map(typeCategoryObj => {
          const typeCategoryValue = Object.keys(typeCategoryObj)[0];
          const typeCategoryLabel = typeCategoryObj[typeCategoryValue];

          return (
            <li key={typeCategoryValue}>
              <Item onClick={() => handleButtonClicked(typeCategoryValue)}>
                {typeCategoryLabel}
              </Item>
            </li>
          );
        })}
      </List>
    </Container>
  );
};
