# Simple Image Slider - Next
 
 imageslider-next is a simple image slider using tailwind css.

## Installation

```zsh
npm i imageslider-next
```

## Example

```ts

<ImageSliderNext data={imageData} sliderClassName={"w-full m-5 shadow-md h-[60vh] rounded-lg"} slideClassName={""} buttonClassName={""} imageHeight={300} imageWidth={500} />

```

### data structure
```json

// json data structure
[
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
]

```

### import in NextJS via external json file
```ts

// Using NextJS and external json.
import imageData from '@/public/your-data.json';

```

## Documentation

**Storybook Url:** [https://imageslider-next.vercel.app/](https://imageslider-next.vercel.app/) 

## Contributing