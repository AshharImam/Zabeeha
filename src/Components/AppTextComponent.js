import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {color} from 'react-native-reanimated';
import colors from '../Utils/colors';
import {fontSizeMedium} from '../Utils/Dimensions';
import {openSans} from '../Utils/fonts';

const AppTextComponent = ({children, style, ...otherProps}) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppTextComponent;

const styles = StyleSheet.create({
  text: {
    fontSize: fontSizeMedium,
    color: colors.white,
    fontFamily: openSans,
  },
});
