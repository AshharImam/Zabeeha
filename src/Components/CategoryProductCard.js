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

const CategoryProductCard = ({
  title,
  image,
  price,
  onPress,
  width = responsiveWidth(35),
  height = responsiveHeight(18),
  // height = 150,
  color = colors.redDarkest,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        // padding: responsiveFontSize(1),
        backgroundColor: color,
        marginHorizontal: responsiveWidth(2),
        marginVertical: responsiveHeight(1),
        borderRadius: responsiveFontSize(1),
        width: width + responsiveFontSize(2),
      }}>
      <View
        style={{
          width: width + responsiveFontSize(2),

          height: height,
        }}>
        <Image
          source={image}
          style={{
            resizeMode: 'cover',
            width: '100%',
            height: responsiveHeight(13),
            borderRadius: responsiveFontSize(1),
          }}
        />
        <View
          style={{
            position: 'absolute',
            backgroundColor: colors.white + 'd',
            width: '100%',
            bottom: 0,
            height: 70,
            flexDirection: 'row',
            borderBottomLeftRadius: responsiveFontSize(1),
            borderBottomRightRadius: responsiveFontSize(1),
            padding: responsiveFontSize(1),
          }}>
          <AppTextComponent
            numberOfLines={2}
            allowFontScaling={false}
            style={{
              color: colors.black,
            }}>
            {title}
          </AppTextComponent>
          <AppTextComponent
            style={{
              fontSize: fontSizeSmall,
              fontWeight: 'bold',
              color: colors.black,
              position: 'absolute',
              right: responsiveFontSize(1),
              bottom: responsiveHeight(0.5),
            }}
            allowFontScaling={false}>
            RS.{' '}
            <AppTextComponent
              style={{fontSize: fontSizeMedium, color: colors.black}}>
              {price}
            </AppTextComponent>
          </AppTextComponent>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryProductCard;

const styles = StyleSheet.create({});
