import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import ImageSliderNext from './imageslider-next';
import { ImageSliderProps } from './imagesliderprops';
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
    {
      id: 1,
      imageUrl: 'https://www.w3schools.com/w3images/workbench.jpg',
      title: 'Image 1',
    },
    {
      id: 2,
      imageUrl: 'https://www.w3schools.com/w3images/coffee.jpg',
      title: 'Image 2',
    },
    {
      id: 3,
      imageUrl: 'https://www.w3schools.com/w3images/sound.jpg',
      title: 'Image 3',
    },
    // Add more images as needed
  ],
  sliderClassName: 'm-5 shadow-md h-[60vh] rounded-lg',
  slideClassName: '',
  buttonClassName: 'w-3 h-3 rounded-full bg-slate-500',
  buttonLabelClassName: 'hidden',
  imageWidth: 500,
  imageHeight: 300,
};
