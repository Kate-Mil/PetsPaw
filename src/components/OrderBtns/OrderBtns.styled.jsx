import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: #f8f8f7;
  padding: 10px;
  color: #8c8c8c;

  transition: color 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:hover {
    color: #ff868e;
  }
`;

export const Img = styled.svg`
  fill: currentColor;
`;
