import React from 'react';
import { StoryFn, Meta } from '@storybook/react-webpack5';
import ImageSliderNext from './imageslider-next';
import { ImageSliderProps } from './imagesliderprops';
const img1: string = require('./stories/assets/images/1.jpg');
const img2: string = require('./stories/assets/images/2.jpg');
const img3: string = require('./stories/assets/images/3.jpg');
import 'tailwindcss/tailwind.css';

export default {
  title: 'ImageSliderNext',
  component: ImageSliderNext,
  tags: ['autodocs'],
} as Meta;

const Template: StoryFn<ImageSliderProps> = (args) => <ImageSliderNext {...args} />;

export const Default = Template.bind({});
Default.args = {
  data: [
  { id: 1, imageSrc: img1, title: 'Image 1', alt: 'Image 1' },
  { id: 2, imageSrc: img2, title: 'Image 2', alt: 'Image 2' },
  { id: 3, imageSrc: img3, title: 'Image 3', alt: 'Image 3' },
    // Add more images as needed
  ],
  sliderClassName: 'm-5 shadow-md h-[60vh] rounded-lg',
  slideClassName: '',
  buttonClassName: 'w-3 h-3 rounded-full bg-slate-500',
  buttonLabelClassName: 'hidden',
  imageWidth: 500,
  imageHeight: 300,
};

// A tiny Mock Image component that mimics next/image API just for Storybook preview.
const MockImage: React.FC<any> = ({ src, alt, width, height, fill, style, ...rest }) => {
  if (fill) {
    return (
      <img src={src} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: rest.objectFit ?? 'cover' }} />
    );
  }
  return <img src={src} alt={alt} width={width} height={height} style={{ width: '100%', height: 'auto', display: 'block', ...style }} />;
};

export const WithImageComponent = Template.bind({});
WithImageComponent.args = {
  ...Default.args,
  ImageComponent: MockImage,
  imageProps: {
    fill: false,
    sizes: '100vw',
  },
  sliderClassName: 'm-5 shadow-md h-[50vh] rounded-lg',
};
