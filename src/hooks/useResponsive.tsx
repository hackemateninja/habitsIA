import {PixelRatio} from 'react-native';

export default (size: number): number => {
  const density = PixelRatio.get();
  switch (density) {
    case 3.5:
      return size;
    case 3:
      return size;
    case 2.5:
      return size - 1.5;
    case 2:
      return size - 2.5;
    case 1.5:
      return size - 3;
    case 1:
      return size - 4;
    default:
      return size;
  }
};
