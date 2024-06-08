
export interface ItemData {
    id: number;
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
    buttonLabelClassName?: string | null;
}
