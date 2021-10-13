import {Dimensions, Platform} from 'react-native';
import {responsiveFontSize} from 'react-native-responsive-dimensions';

export const screenWidth = Dimensions.get('screen').width;
export const screenHeight = Dimensions.get('screen').height;
export const fontSizeSmall = responsiveFontSize(1.4);
export const fontSizeMedium = responsiveFontSize(2);
export const fontSizeLarge = responsiveFontSize(2.4);
export const fontSizeXLarge = responsiveFontSize(3);
