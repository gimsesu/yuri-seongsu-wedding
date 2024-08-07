/* eslint-disable no-unused-vars */
import {StaticImageData} from "next/image";

export interface ImageProps {
  id: number;
  height: number;
  width: number;
  filename?: string;
  blurDataUrl?: string;
}

export interface SharedModalProps {
  index: number;
  images?: StaticImageData[];
  currentPhoto?: StaticImageData;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}
