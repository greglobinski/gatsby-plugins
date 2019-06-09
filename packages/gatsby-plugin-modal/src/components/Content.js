import React, { useState, useEffect } from 'react';
import { DialogContent } from '@reach/dialog';

import CloseButton from './CloseButton';

export default ({
  children,
  isOpen,
  closeModal,
  isClosing,
  sourceRef,
  background,
  className
}) => {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  const originBounding = sourceRef.getBoundingClientRect();
  const originWidth = originBounding.width;
  const originHeight = originBounding.height;

  const originX = originBounding.x;
  const originY = originBounding.y;
  const scaleX = originWidth / windowWidth;
  const scaleY = originHeight / windowHeight;

  const translateX = `${originX}px`;
  const translateY = `${originY}px`;

  const [content, setContent] = useState({
    translateX,
    translateY,
    scaleX,
    scaleY,
    transition: 250
  });

  const [innerContent, setInnerContent] = useState({
    opacity: 0,
    transition: 50
  });

  useEffect(() => {
    if (isOpen && !isClosing) {
      setTimeout(() => {
        setContent({
          translateX: 0,
          translateY: 0,
          scaleX: 1,
          scaleY: 1,
          transition: 500
        });
      }, 0);

      setTimeout(() => {
        setInnerContent({
          opacity: 1,
          transition: 500
        });
      }, 200);
    }

    if (isClosing) {
      setInnerContent({
        opacity: 0,
        transition: 50
      });

      setContent({
        translateX,
        translateY,
        scaleX,
        scaleY,
        transition: 250
      });
    }
  }, [isOpen, isClosing]);

  return (
    <DialogContent
      style={{
        background: background ? background : '#666',
        transform: `translate3D(${content.translateX}, ${
          content.translateY
        }, 0) scale(${content.scaleX}, ${content.scaleY}) perspective(1000px)`,
        transition: `transform ${content.transition}ms`,
        position: 'absolute',
        margin: 0,
        padding: 0,
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        outline: 'none',
        transformOrigin: 'top left'
      }}
      gatsby-modal-content="true"
      className={className}
    >
      <div
        style={{
          height: '100%',
          opacity: innerContent.opacity,
          position: 'relative',
          transition: `opacity ${innerContent.transition}ms`,
          width: '100%'
        }}
        gatsby-modal-inner-content="true"
      >
        <CloseButton onClick={closeModal} />
        {children}
      </div>
    </DialogContent>
  );
};
