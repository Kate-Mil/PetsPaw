import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #fbe0dc;
  color: #ff868e;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  transition: background-color 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    color 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:hover {
    background: #ff868e;
    color: #fff;
  }
`;

export const Img = styled.svg`
  fill: currentColor;
`;
