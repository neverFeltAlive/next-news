import { ImageProps, StaticImageData } from 'next/dist/client/image';

export interface IProps extends ImageProps {
  fallbackSrc: string | StaticImageData;
}
