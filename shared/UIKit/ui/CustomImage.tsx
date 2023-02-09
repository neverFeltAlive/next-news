import { FC } from 'react';
import { ImageProps } from 'next/dist/client/image';

import { StyledImage } from '@/shared/UIKit/ui/CustomImage.styles';

export const CustomImage: FC<ImageProps> = (props) => {
  return <StyledImage {...props} />;
};

export default CustomImage;
