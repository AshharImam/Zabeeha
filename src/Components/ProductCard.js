import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../Utils/colors';
import {fontSizeMedium, fontSizeSmall} from '../Utils/Dimensions';
import AppTextComponent from './AppTextComponent';

const ProductCard = ({
  title,
  image,
  price,
  onPress,
  width = responsiveWidth(35),
  height = responsiveHeight(18),
  color = colors.redDarkest,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: responsiveFontSize(1),
        backgroundColor: color,
        marginHorizontal: responsiveWidth(2),
        marginVertical: responsiveHeight(1),
        borderRadius: responsiveFontSize(1),
        width: width + responsiveFontSize(2),
      }}>
      <View
        style={{
          width: width,
          height: height,
        }}>
        <Image
          source={image}
          style={{
            resizeMode: 'cover',
            width: '100%',
            height: responsiveHeight(10),
            borderRadius: responsiveFontSize(1),
          }}
        />
        <AppTextComponent>{title}</AppTextComponent>
        <AppTextComponent
          style={{
            fontSize: fontSizeSmall,
            fontWeight: 'bold',
            position: 'absolute',
            right: 0,
            bottom: 0,
          }}>
          RS.{' '}
          <AppTextComponent style={{fontSize: fontSizeMedium}}>
            {price}
          </AppTextComponent>
        </AppTextComponent>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
