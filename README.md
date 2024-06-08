# Simple Image Slider - Next
 
 imageslider-next is a simple image slider using tailwind css.

## Installation

```zsh
npm i imageslider-next
```

### Configure Tailwind

For help with Tailwind CSS installation: 
[Tailwind CSS Installation](https://tailwindcss.com/docs/installation)

Add imageslider-next component to the template path in `tailwind.config.js` file:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./node_modules/imageslider-next/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Example

```ts

<div className="relative flex items-center justify-center">
  <ImageSliderNext data={imageData} sliderClassName={"w-full shadow-md h-48 sm:h-64 xl:h-80 2xl:h-96 rounded-lg"} slideClassName={""} buttonClassName={"w-3 h-3 rounded-full bg-black/50"} buttonLabelClassName={"hidden"} imageHeight={300} imageWidth={500} />
</div>

```

### data structure
```ts

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