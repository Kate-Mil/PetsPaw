import styled from 'styled-components';

export const SearchFormWrapper = styled.form`
  max-width: 470px;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  position: relative;
  outline: none;
`;

export const SearchFormButton = styled.button`
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

export const SearchFormInput = styled.input`
  display: inline-block;
  height: 60px;
  width: 470px;
  border-radius: inherit;
  font-family: inherit;
  font-size: 20px;
  line-height: 30px;
  color: inherit;
  padding-left: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  border: 2px solid transparent;

  &::placeholder {
    color: #8c8c8c;
  }

  &:hover {
    border-color: #fbe0dc;
  }

  &:focus-visible {
    outline: none;
    border-color: #ff868e;
  }

  &:active {
    border-color: #ff868e;
  }
`;
