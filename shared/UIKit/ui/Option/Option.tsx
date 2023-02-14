import { StyledOption } from './Option.styles';
import { IProps } from './Option.types';

export const Option = <T,>({
  children,
  value,
  setValue,
  onClick,
  isSelected = false,
}: IProps<T>) => {
  return (
    <StyledOption
      isSelected={isSelected}
      onClick={() => {
        !!onClick && onClick();
        setValue(value);
      }}
    >
      {children}
    </StyledOption>
  );
};

export default Option;
