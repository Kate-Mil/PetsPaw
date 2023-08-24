import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Item = styled.li`
  width: 60px;
  height: 60px;
  border-radius: 20px;
  padding: 15px;
  background-color: #fff;

  &:hover {
    background: #fbe0dc;
  }

  &:active {
    background: #ff868e;
  }
`;

export const Img = styled.svg`
  &:active ${Item} {
    fill: #fff;
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
`;
