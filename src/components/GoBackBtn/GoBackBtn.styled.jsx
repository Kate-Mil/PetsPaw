import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
display: inline-block;
width: 40px;
height: 40px;
border-radius: 10px;
background: #fbe0dc;
padding:10px;
cursor: pointer;
      
    transition: background-color, cubic-bezier(0.4, 0, 0.2, 1);
   
    &:focus,
    &:hover,
    &:active {   
        background-color: #ff868e;

    }     
}`;
