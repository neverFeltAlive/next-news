import { FC } from 'react';
import { createPortal } from 'react-dom';

import { IProps } from '@/shared/Popup/ui/Popup.types';
import { Container, Wrapper } from '@/shared/Popup/ui/Popup.styles';

export const Popup: FC<IProps> = ({ children, wrapperId, closePopup }) => {
  return createPortal(
    <Wrapper onClick={closePopup}>
      <Container>{children}</Container>
    </Wrapper>,
    document.getElementById(wrapperId) as HTMLElement
  );
};

export default Popup;
