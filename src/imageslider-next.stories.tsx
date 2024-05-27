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
  sliderClassName: 'w-full m-5 shadow-md h-[60vh] rounded-lg',
  slideClassName: '',
  buttonClassName: '',
  imageWidth: 500,
  imageHeight: 300,
};
