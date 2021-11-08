import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../Utils/colors';
import AppTextComponent from './AppTextComponent';

const AddToCartButtonComponent = ({
  relative = false,
  style,
  width = 100,
  height = responsiveHeight(8),
  onPress,
  backgroundColor = colors.greyLightest,
  title,
}) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      // accessibilityState={isFocused ? {selected: true} : {}}
      // accessibilityLabel={options.tabBarAccessibilityLabel}
      // testID={options.tabBarTestID}
      onPress={onPress}
      // onLongPress={onLongPress}
      style={[
        {
          width: responsiveWidth(width),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.redDarkest,
          borderRadius: responsiveFontSize(3),
          // borderTopRightRadius: responsiveFontSize(3),
          // borderTopLeftRadius: responsiveFontSize(3),
          height: height,
        },
        !relative && {
          position: 'absolute',
          bottom: 1,
          right: responsiveWidth(4),
        },
        style,
      ]}>
      <View
        style={{
          borderRadius: 100,
          padding: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AppTextComponent style={{color: colors.white, fontWeight: '600'}}>
          {title}
        </AppTextComponent>
      </View>
    </TouchableOpacity>
  );
  return (
    <TouchableOpacity
      accessibilityRole="button"
      // accessibilityState={isFocused ? {selected: true} : {}}
      // accessibilityLabel={options.tabBarAccessibilityLabel}
      // testID={options.tabBarTestID}
      onPress={onPress}
      // onLongPress={onLongPress}
      style={[
        {
          width: responsiveWidth(width),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: backgroundColor,
          borderRadius: responsiveFontSize(3),
          height: responsiveHeight(8),
        },
        !relative && {
          position: 'absolute',
          bottom: 1,
          right: responsiveWidth(4),
        },
        style,
      ]}>
      <View
        style={{
          borderRadius: 100,
          padding: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AppTextComponent style={{color: colors.grey, fontWeight: '600'}}>
          {title}
        </AppTextComponent>
      </View>
    </TouchableOpacity>
  );
};

export default AddToCartButtonComponent;

const styles = StyleSheet.create({});
