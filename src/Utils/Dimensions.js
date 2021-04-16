import {Dimensions, Platform} from 'react-native';

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;
export const fontSizeSmall =
  Platform.OS === 'android' ? screenHeight * 0.016 : screenHeight * 0.015;
export const fontSizeMedium = screenHeight * 0.02;
export const fontSizeLarge = screenHeight * 0.024;
export const fontSizeXLarge = screenHeight * 0.03;
