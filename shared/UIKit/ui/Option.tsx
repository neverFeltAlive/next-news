import { IProps } from '@/shared/UIKit/ui/Option.types';
import { StyledOption } from '@/shared/UIKit/ui/Option.styles';

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
