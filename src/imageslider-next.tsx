'use strict'
'use client'

import React, { useEffect, useRef, useState } from 'react';
import { ImageSliderProps } from './imagesliderprops';


const ImageSliderNext: React.FC<ImageSliderProps> = ({ data, sliderClassName, slideClassName, buttonClassName, imageWidth, imageHeight, buttonLabelClassName, ImageComponent, imageProps }) => {
  
  const [current, setCurrent] = useState(0);
  const slidesRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (rootRef.current) {
      slidesRef.current = rootRef.current.querySelector('.slides') as HTMLDivElement | null;
    }
  }, []);

  const handlePrev = () => {
    if (slidesRef.current) {
      setCurrent((current - 1 + slidesRef.current.children.length) % slidesRef.current.children.length);
    }
  }

  const handleNext = () => {
    if (slidesRef.current) {
      setCurrent((current + 1) % slidesRef.current.children.length);
    }
  }

  const goToNext = (index: number) => {
    setCurrent(index);
  }

  useEffect(() => {
    if (slidesRef.current) {
      slidesRef.current.style.transform = 'translateX(' + (-current * 100) + '%)';
    }
  }, [current, slidesRef]);

  const baseSliderCssClass = "overflow-hidden relative flex items-center justify-center";
  const baseSlideCssClass = "slide flex-none w-full h-full items-center justify-center overflow-hidden";
  const baseButtonCssClass = (buttonClassName === "") ? "w-3 h-3 rounded-full bg-black/50" : buttonClassName;
  const baseButtonLabelCssClass = (buttonLabelClassName === null) ? "" : buttonLabelClassName;

  return (
  <div ref={rootRef} className={`${baseSliderCssClass} ${sliderClassName}`}>
        <div className="slides flex transition-transform duration-700 ease-in-out">
          {data.map((itemData, index) => {
            const itemWidth = itemData.width ?? imageWidth ?? 1;
            const itemHeight = itemData.height ?? imageHeight ?? 1;
            // keep paddingTop calculation available if needed elsewhere
            const paddingTop = `${(itemHeight / itemWidth) * 100}%`;

            const forwardedImageProps = { ...(imageProps ?? {}) };
            // Always ignore fill to avoid absolute/fill behavior which can cause layout issues in the slider
            if ('fill' in forwardedImageProps) delete forwardedImageProps.fill;

            return (
              <div key={itemData.id} className={`${baseSlideCssClass} ${slideClassName}`}>
                {ImageComponent ? (
                  // Always render the provided Image component in non-fill mode (width/height or responsive)
                  <ImageComponent
                    src={itemData.imageSrc ?? itemData.imageUrl ?? ''}
                    alt={itemData.alt ?? itemData.title}
                    width={itemData.width ?? imageWidth}
                    height={itemData.height ?? imageHeight}
                    className="w-full h-auto"
                    {...forwardedImageProps}
                  />
                ) : (
                  // native img fallback: make responsive via width 100% and height auto
                  <img src={itemData.imageUrl ?? (itemData.imageSrc as string) ?? ''} alt={itemData.alt ?? itemData.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                )}
              </div>
            );
          })}
        </div>
        
        <div className="flex flex-wrap absolute bottom-2 z-50 space-x-3">
                {
                    data.map((itemData, index) => (
                            <button type="button" onClick={() => goToNext(index)} className={baseButtonCssClass} aria-current="false" aria-label={itemData.title} key={index}>
                              <span className={baseButtonLabelCssClass}>
                                {itemData.title}
                              </span>
                            </button>
                         )
                    )
                }
        </div>

        <button onClick={handlePrev} className="absolute left-0 p-4 cursor-pointer group focus:outline-none" aria-label="Previous">
            {/* SVG for Previous button */}
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                <span className="hidden">Previous</span>
            </span>
        </button>
        <button onClick={handleNext} className="absolute right-0 p-4 cursor-pointer group focus:outline-none" aria-label="Next">
            {/* SVG for Next button */}
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                <span className="hidden">Next</span>
            </span>
        </button>
    </div>
  );
}

export default ImageSliderNext;
