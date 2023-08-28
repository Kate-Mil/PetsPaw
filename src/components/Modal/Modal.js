import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { createPortal } from 'react-dom';
import {
  Overlay,
  ModalContent,
  Thumb,
  ThumbInner,
  ThumbImage,
  ThumbsContainer,
  ModalContentBnt,
  ModalContentText,
  ModalContentTextSpan,
  Span,
  ModalContentTitle,
  ImageOverlay,
  Img,
  Wrapper,
  BntContaiter,
} from './Modal.styled';
import sprite from '../../pictures/sprite.svg';

const Modal = ({ onClick }) => {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(
        acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const removeFile = file => () => {
    const newFiles = [...files];
    newFiles.splice(newFiles.indexOf(file), 1);
    setFiles(newFiles);
  };

  const thumbs = files.map(file => (
    <Thumb key={file.name}>
      <ThumbInner>
        <ThumbImage src={file.preview} alt={file.name} />
      </ThumbInner>
      <button onClick={removeFile(file)}>Remove File</button>
    </Thumb>
  ));

  useEffect(() => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  const hendleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onClick();
    }
  };

  return createPortal(
    <Overlay onClick={hendleOverlayClick}>
      <ModalContent>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <Wrapper>
            <ModalContentTitle>
              Upload a .jpg or .png Cat Image
            </ModalContentTitle>

            <ModalContentText>
              Any uploads must comply with the <Span>upload guidelines</Span> or
              face deletion.
            </ModalContentText>

            <ImageOverlay>
              <Img width="20" height="20">
                <use href={`${sprite}#pload-2`}></use>
              </Img>
            </ImageOverlay>
            <BntContaiter>
              <ModalContentBnt type="button" onClick={open}>
                <ModalContentTextSpan>Drag here </ModalContentTextSpan>your file
                or
              </ModalContentBnt>
              <ModalContentBnt
                type="button"
                onClick={() => console.log('HIT!')}
              >
                <ModalContentTextSpan>Click here</ModalContentTextSpan> to
                upload{' '}
              </ModalContentBnt>
            </BntContaiter>
          </Wrapper>
        </div>
        <ThumbsContainer>{thumbs}</ThumbsContainer>{' '}
      </ModalContent>
    </Overlay>,
    document.querySelector('#root')
  );
};

export default Modal;
