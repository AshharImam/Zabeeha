import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {SliderBox} from 'react-native-image-slider-box';
import {
  responsiveHeight,
  responsiveScreenHeight,
} from 'react-native-responsive-dimensions';
import colors from '../Utils/colors';

const AppBanner = ({images = []}) => {
  return (
    <SliderBox
      images={images}
      autoplay
      dotStyle={{width: 0, height: 0}}
      circleLoop={true}
      disableOnPress
      imageLoadingColor={colors.red}
      sliderBoxHeight={responsiveHeight(25)}
      ImageComponent={FastImage}
    />
  );
};

export default AppBanner;

const styles = StyleSheet.create({});
