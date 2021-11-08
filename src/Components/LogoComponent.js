import React from 'react';
import {View, Text, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const LogoComponent = ({
  resizeMode = 'contain',
  width = responsiveWidth(35),
  height = responsiveHeight(28),
  style,
}) => {
  return (
    <Image
      source={require('../Assets/images/icon.png')}
      style={[
        {
          resizeMode: resizeMode,
          width: width,
          height: height,
        },
        style,
      ]}
    />
    // <View></View>
  );
};

export default LogoComponent;
