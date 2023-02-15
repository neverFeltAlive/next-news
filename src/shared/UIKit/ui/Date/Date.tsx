import { FC } from 'react';

import { DateDay, DateMonth, DateYear, StyledDate } from './Date.styles';
import { IProps } from './Date.types';

export const Date: FC<IProps> = ({ year, day, month }) => {
  return (
    <StyledDate>
      <DateYear>{year}</DateYear>.<DateMonth>{month}</DateMonth>.
      <DateDay>{day}</DateDay>
    </StyledDate>
  );
};
