import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: #1d1d1d99;
`;

export const ModalContent = styled.div`
  max-height: calc(100vh - 24px);
  border-radius: 20px;
  background: #f8f8f7;
  width: 680px;
  height: 840px;
  margin-right: 30px;
  overflow: hidden;
  text-align: center;
`;

export const ThumbsContainer = styled.div`
    display: flex,
    flex-direction: row,
    flex-wrap: wrap,
    margin-top: 16
  }`;

export const Thumb = styled.div`
  display: inline-flex;
  border-radius: 2px;
  border: 1px solid #eaeaea;
  margin-bottom: 8px;
  margin-right: 8px;
  width: 100px;
  height: 100px;
  padding: 4px;
  box-sizing: border-box;
`;

export const ThumbInner = styled.div`
  display: flex;
  min-width: 0;
  overflow: hidden;
`;

export const ThumbImage = styled.img`
  display: block;
  width: auto;
  height: 100%;
`;

export const ModalContentBnt = styled.button`
  color: #8c8c8c;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  white-space: nowrap;
`;
export const BntContaiter = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalContentTextSpan = styled.span`
  color: #1d1d1d;
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
`;

export const ModalContentTitle = styled.h1`
  ont-size: 36px;
  font-weight: 500;
  display: block;
  text-align: center;
  margin-top: 100px;
  margin-bottom: 10px;
`;

export const ModalContentText = styled.p`
  margin-bottom: 40px;
  color: #8c8c8c;
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
`;

export const Span = styled(ModalContentBnt)`
  color: #ff868e;
`;

export const ImageOverlay = styled.div`
  border-radius: 20px;
  border: 2px dashed #fbe0dc;
  background: #fff;
  width: 640px;
  height: 320px;
  margin: 0 auto;
  position: relative;
`;

export const Img = styled.svg`
  width: 100%;
  heigt: auto;
  object-fit: cover;
`;

export const Wrapper = styled.div`
  position: relative;
`;
