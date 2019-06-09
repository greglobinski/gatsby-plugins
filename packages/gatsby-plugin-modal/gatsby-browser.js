import React from 'react';
import { ModalProvider } from './src/components/Modal';

export const wrapPageElement = ({ element, props }, { wrapper = false }) => {
  return <ModalProvider wrapper={wrapper}>{element}</ModalProvider>;
};
