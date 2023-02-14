import Image from 'next/image';
import { FC, useState } from 'react';

import styled from 'styled-components';

import { Wrapper } from './CustomImage.styles';
import { IProps } from './CustomImage.types';
import ImageLoader from './ImageLoader';

const LocalImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.3s ease-in-out;
`;

export const CustomImage: FC<IProps> = ({ src, fallbackSrc, ...props }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  const handleComplete = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setImageSrc(fallbackSrc);
    setIsLoading(false);
  };

  return (
    <>
      {!!isLoading && <ImageLoader />}
      <Wrapper isLoading={isLoading}>
        <LocalImage
          {...props}
          src={imageSrc}
          onLoadingComplete={handleComplete}
          onError={handleError}
        />
      </Wrapper>
    </>
  );
};

export default CustomImage;
