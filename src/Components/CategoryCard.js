import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../Utils/colors';
import {fontSizeLarge} from '../Utils/Dimensions';
import AppTextComponent from './AppTextComponent';

const CategoryCard = ({title, image, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          width: responsiveWidth(35),
          height: responsiveHeight(8),
          marginHorizontal: responsiveWidth(3),
        }}>
        <Image
          source={image}
          resizeMode="cover"
          style={{
            width: responsiveWidth(35),
            height: responsiveHeight(8),
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        />
        {/* <ImageBackground
        source={image}
        resizeMode="cover"
        style={{
          width: responsiveWidth(35),
          height: responsiveHeight(8),
          marginHorizontal: responsiveWidth(3),
        }}> */}
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: colors.black + '44',
            flexDirection: 'row',
          }}>
          <AppTextComponent style={styles.heading}>{title}</AppTextComponent>
        </View>
        {/* </ImageBackground> */}
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  heading: {
    textShadowColor: colors.black,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 10,
    fontSize: fontSizeLarge,
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    paddingLeft: responsiveWidth(1),
  },
});
