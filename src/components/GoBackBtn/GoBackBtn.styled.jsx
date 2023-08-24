import styled from 'styled-components';

export const StyledLink = styled.button`
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
