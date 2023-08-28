import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 290px;
  height: 40px;
  border-radius: 10px;
  background: #fff;

  cursor: pointer;
`;

export const SortedCategory = styled.div`
  padding: 10px;
`;

export const Title = styled.h1`
  color: #8c8c8c;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  padding-left: 10px;
  margin: 0;
  text-transform: uppercase;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  color: #8c8c8c;
  ${({ isOpen }) => isOpen && `transform: rotate(-180deg);`}
`;

export const Img = styled.svg`
  fill: currentColor;
`;

export const List = styled.ul`
  position: absolute;
  top: 65px;
  left: 0;
  padding-left: 10px;
  background: #fff;
  width: 100%;
  border-radius: 10px;
  max-height: 340px;
  overflow: auto;

  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

export const Item = styled.button`
  color: #8c8c8c;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  text-transform: none;

  transition: color 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    text-transform 0.2s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:hover {
    text-transform: uppercase;
    color: #ff868e;
  }
`;
