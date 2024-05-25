
export interface ItemData {
    id: number;
    imageUrl: string;
    title: string;
  }
  
export interface ImageSliderProps {
    data: ItemData[];
    sliderStyle: string;
    slideStyle: string;
    buttonStyle: string;
    imageWidth: number;
    imageHeight: number;
}
