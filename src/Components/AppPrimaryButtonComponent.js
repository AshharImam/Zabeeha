import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import colors from '../Utils/colors';
import {fontSizeMedium} from '../Utils/Dimensions';
import AppTextComponent from './AppTextComponent';

const AppPrimaryButtonComponent = ({
  icon,
  title,
  width = '100%',
  height = responsiveHeight(5),
  textColor = colors.white,
  fontSize = fontSizeMedium,
  color = colors.redDarkest,
  style,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          width: width,
          height: height,
          backgroundColor: color,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: responsiveHeight(1),
          overflow: 'hidden',
        },
        style,
      ]}
      onPress={onPress}>
      <View style={{flexDirection: 'row'}}>
        {icon && icon()}
        <AppTextComponent
          style={{
            color: textColor,
            fontSize: fontSize,
          }}>
          {title}
        </AppTextComponent>
      </View>
    </TouchableOpacity>
  );
};

export default AppPrimaryButtonComponent;

const styles = StyleSheet.create({});
