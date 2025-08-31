# imageslider-next

A small, framework-agnostic image slider component built with Tailwind CSS and TypeScript. This package now supports passing a custom image component (for example, Next.js `Image`) so you can enable optimized images inside Next.js projects.

## Install

```zsh
npm i imageslider-next
# or
pnpm add imageslider-next
```

## Features

- Lightweight, accessible image slider.
- Accepts a custom `ImageComponent` (e.g. `next/image`) for optimized images.
- `imageProps` forwarding for responsive behavior (e.g. `sizes`, `priority`, `objectFit`).
- Responsive native `<img>` fallback when no `ImageComponent` is provided.
- Fixed: each slider instance is independent; controls no longer collide across multiple instances.

## Basic usage

```tsx
import ImageSliderNext from 'imageslider-next';

const data = [
  { id: 1, imageUrl: '/images/1.jpg', title: 'One', alt: 'One', width: 1200, height: 800 },
  { id: 2, imageUrl: '/images/2.jpg', title: 'Two', alt: 'Two', width: 1200, height: 800 },
  { id: 3, imageUrl: '/images/3.jpg', title: 'Three', alt: 'Three', width: 1200, height: 800 },
];

<ImageSliderNext
  data={data}
  sliderClassName="w-full shadow-md h-64 sm:h-80 rounded-lg"
  slideClassName=""
  buttonClassName="w-3 h-3 rounded-full bg-black/50"
  imageWidth={1200}
  imageHeight={800}
/>
```

## Using Next.js `Image` for optimization

If you use Next.js, pass `Image` as the `ImageComponent` prop and optionally forward `imageProps` to enable responsive loading. Example:

```tsx
import Image from 'next/image';
import ImageSliderNext from 'imageslider-next';
import img1 from '@/public/1.jpg';

const slides = [
  { id: 1, imageSrc: img1, title: 'First', alt: 'first', width: 1200, height: 800 },
  // ...
];

<ImageSliderNext
  data={slides}
  sliderClassName="w-full shadow-md h-[50vh] rounded-lg"
  ImageComponent={Image}
  imageProps={{ sizes: '100vw', priority: true }}
  imageWidth={1200}
  imageHeight={800}
/>
```

Notes:
- We intentionally strip `fill: true` when forwarded to avoid layout issues inside the slider (the slider manages layout). If you need `fill` behavior, you can implement a wrapper with an explicit aspect ratio on your slide.
- Provide `width`/`height` per item or use `imageWidth`/`imageHeight` defaults to help the component calculate correct sizes.

## Storybook

To run the component locally with Storybook:

```bash
npm run storybook
# or
pnpm storybook
```

There are example stories that show a native `<img>` fallback and usage with a mock `Image` component. Use the `With Image Component` story to test integration.

Hosted Storybook: https://imageslider-next.vercel.app/

## TypeScript / image imports

If your TypeScript setup complains about importing image files, add a simple declaration file `src/types/images.d.ts`:

```ts
declare module '*.jpg';
declare module '*.png';
declare module '*.svg';
declare module '*.webp';
declare module '*.avif';
```

Also, for local development you may want to add React type declarations if you see missing types:

```bash
npm install -D @types/react @types/react-dom
```

## API

`ImageSliderNext` props (high level):

- `data: ItemData[]` — items to render. Each item supports `imageUrl`, `imageSrc` (imported images), `title`, `alt`, `width`, `height`.
- `sliderClassName: string` — classes applied to slider root.
- `slideClassName: string` — classes applied to each slide.
- `buttonClassName: string` — classes applied to pagination buttons.
- `imageWidth?: number`, `imageHeight?: number` — defaults used when per-item sizes missing.
- `ImageComponent?: React.ComponentType<any>` — optional image component (pass Next's `Image`).
- `imageProps?: Record<string, any>` — forwarded props for the image component (we strip `fill`).

## Contributing

PRs welcome — please run `npm run build` and `npm run storybook` to test changes locally.