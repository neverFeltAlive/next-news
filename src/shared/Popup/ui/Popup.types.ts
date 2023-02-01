import { ReactNode } from 'react';

export interface IProps {
  closePopup: () => void;
  children: ReactNode;
  wrapperId: string;
}
