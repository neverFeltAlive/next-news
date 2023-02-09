import { FC } from 'react';

import { IProps } from '@/shared/UIKit/ui/Date.types';
import {
  DateDay,
  DateMonth,
  DateYear,
  StyledDate,
} from '@/shared/UIKit/ui/Date.styles';

export const Date: FC<IProps> = ({ year, day, month }) => {
  return (
    <StyledDate>
      <DateYear>{year}</DateYear>.<DateMonth>{month}</DateMonth>.
      <DateDay>{day}</DateDay>
    </StyledDate>
  );
};
