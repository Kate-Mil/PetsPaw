import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const PictureWrapper = styled.picture`
  width: 775px;
  height: 900px;
  position: absolute;
  top: -30px;
  right: -30px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Background = styled.div`
  width: 680px;
  height: 840px;
  border-radius: 20px;
  background: #fbe0dc;
  padding: 30px 30px 30px 65px;
`;
