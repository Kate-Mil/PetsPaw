import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.ul`
  display: flex;
  gap: 10px;
`;

export const StyledLink = styled(NavLink)`
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 20px;
  padding: 15px;
  background-color: #fff;
  color: #ff868e;

  transition: background-color 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55),
    color 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  &:hover {
    background: #fbe0dc;
  }

    &.active {
      background: #ff868e;
      color: #fff;
    }
  }
`;

export const Img = styled.svg`
  fill: currentColor;
`;
