declare module 'imageslider-next' {
    import React from 'react';
  
    export interface ItemData {
      id: string;
      imageUrl: string;
      title: string;
    }
  
    export interface ImageSliderProps {
      data: ItemData[];
      sliderClassName: string;
      slideClassName: string;
      buttonClassName: string;
      imageWidth: number;
      imageHeight: number;
    }
  
    const ImageSliderNext: React.FC<ImageSliderProps>;
  
    export default ImageSliderNext;
  }
  