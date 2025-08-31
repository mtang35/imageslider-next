
import React from 'react';

export interface ItemData {
  id: number;
  /** string URL or imported image (StaticImageData) */
  imageUrl?: string;
  imageSrc?: string | any;
  title: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface ImageSliderProps {
  data: ItemData[];
  sliderClassName: string;
  slideClassName: string;
  buttonClassName: string;
  /** default width applied when individual item width is not provided */
  imageWidth?: number;
  /** default height applied when individual item height is not provided */
  imageHeight?: number;
  buttonLabelClassName?: string | null;
  /** Optional image component to render images. Pass Next.js `Image` here for optimized images. */
  ImageComponent?: React.ComponentType<any>;
  /** Optional props forwarded to the image component or native img element (e.g. { fill: true, sizes: '100vw' }) */
  imageProps?: Record<string, any>;
}
