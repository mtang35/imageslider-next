'use strict'
'use client'

import React, { useEffect, useState } from 'react';
import { ImageSliderProps } from './imagesliderprops';
//import 'tailwindcss/tailwind.css';


const ImageSliderNext: React.FC<ImageSliderProps> = ({ data, sliderClassName, slideClassName, buttonClassName, imageWidth, imageHeight }) => {
  
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const slider = document.getElementById('slider');
    if (slider) {
      setSlides(slider.querySelector('.slides') as HTMLDivElement);
    }
  }, []);

  const handlePrev = () => {
    if (slides) {
      setCurrent((current - 1 + slides.children.length) % slides.children.length);
    }
  }

  const handleNext = () => {
    if (slides) {
      setCurrent((current + 1) % slides.children.length);
    }
  }

  const goToNext = (index: number) => {
    setCurrent(index);
  }

  useEffect(() => {
    if (slides) {
      slides.style.transform = 'translateX(' + (-current * 100) + '%)';
    }
  }, [current, slides]);

  const baseSliderCssClass = "overflow-hidden relative flex items-center justify-center";
  const baseSlideCssClass = "slide flex-none w-full h-full items-center justify-center overflow-hidden";

  return (
    <div className={`${baseSliderCssClass} ${sliderClassName}`} id="slider">
        <div className="slides flex transition-transform duration-700 ease-in-out">
          {data.map((itemData, index) => (
            <div key={itemData.id} className={`${baseSlideCssClass} ${slideClassName}`}>
              <img src={itemData.imageUrl} alt={itemData.title} className='w-full' />
            </div>
          ))}
        </div>
        
        <div className="flex flex-wrap absolute bottom-2 z-50 space-x-3">
                {
                    data.map((itemData, index) => (
                            <button type="button" onClick={() => goToNext(index)} className="w-3 h-3 rounded-full bg-black/50" aria-current="false" aria-label={itemData.title} key={index}></button>
                         )
                    )
                }
        </div>

        <button onClick={handlePrev} className="absolute left-0 p-4 cursor-pointer group focus:outline-none">
            {/* SVG for Previous button */}
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black/30 dark:bg-gray-800/30 group-hover:bg-black/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                <span className="hidden">Previous</span>
            </span>
        </button>
        <button onClick={handleNext} className="absolute right-0 p-4 cursor-pointer group focus:outline-none">
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
