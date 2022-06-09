import React, { FC } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from './image.module.scss';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface ImageProps {
  alt: string;
  src: string;
  width: string;
  height: string;
  className?: string;
}

const Image: FC<ImageProps> = ({
  alt,
  src,
  width,
  height,
  className,
}: ImageProps) => (
  <LazyLoadImage
    alt={alt}
    src={src}
    effect="blur"
    width={width}
    height={height}
    className={styled.image}
    wrapperClassName={className}
  />
);

export default Image;
