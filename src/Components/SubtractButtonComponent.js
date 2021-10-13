import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';

import colors from '../Utils/colors';
import {fontSizeLarge} from '../Utils/Dimensions';
import AppTextComponent from './AppTextComponent';

const SubtractButtonComponent = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Feather name="minus" size={fontSizeLarge} color={colors.white} />
    </TouchableOpacity>
  );
};

export default SubtractButtonComponent;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: responsiveFontSize(0.2),
    borderColor: colors.white,

    width: responsiveHeight(3),
    height: responsiveHeight(3),
  },
});
