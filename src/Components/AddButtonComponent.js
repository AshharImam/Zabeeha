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

const AddButtonComponent = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btn}>
      <Feather name="plus" size={fontSizeLarge} color={colors.white} />
    </TouchableOpacity>
  );
};

export default AddButtonComponent;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.redDarkest,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,

    width: responsiveHeight(3),
    height: responsiveHeight(3),
  },
});
