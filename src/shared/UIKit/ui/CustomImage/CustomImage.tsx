import Image from 'next/image';
import { FC, useState } from 'react';

import styled from 'styled-components';

import { ImageFallback } from '../ImageFallback/ImageFallback';
import { SpinningLoader } from '../ImageLoader/SpinningLoader';
import { LoaderWrapper, Wrapper } from './CustomImage.styles';
import { IProps } from './CustomImage.types';

const LocalImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: all 0.3s ease-in-out;
`;

export const CustomImage: FC<IProps> = ({ src, fallbackSrc, ...props }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [isErrored, setIsErrored] = useState(false);

  const handleComplete = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setImageSrc(fallbackSrc);
    setIsLoading(false);
    setIsErrored(true);
  };

  return (
    <>
      {isLoading && (
        <LoaderWrapper>
          <SpinningLoader />
        </LoaderWrapper>
      )}
      {isErrored ? (
        <ImageFallback />
      ) : (
        <Wrapper isLoading={isLoading}>
          <LocalImage
            {...props}
            src={imageSrc}
            onLoadingComplete={handleComplete}
            onError={handleError}
          />
        </Wrapper>
      )}
    </>
  );
};

export default CustomImage;
