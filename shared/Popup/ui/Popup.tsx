import { FC } from 'react';

import { createPortal } from 'react-dom';

import { Container, Wrapper } from './Popup.styles';
import { IProps } from './Popup.types';

export const Popup: FC<IProps> = ({ children, wrapperId, closePopup }) => {
  return createPortal(
    <Wrapper onClick={closePopup}>
      <Container>{children}</Container>
    </Wrapper>,
    document.getElementById(wrapperId) as HTMLElement
  );
};

export default Popup;
