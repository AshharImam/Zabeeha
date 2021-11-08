import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import colors from '../Utils/colors';
import {fontSizeLarge, fontSizeXLarge} from '../Utils/Dimensions';
import AppTextComponent from './AppTextComponent';

const AppButtonComponent = ({
  title,
  onPress = () => {},
  style,
  textStyle,
  disable = false,
  isLoading = false,
  secondary = false,
  color = colors.redDarkest,
}) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      style={[
        styles.btn,
        {
          backgroundColor: color,
          overflow: 'hidden',
        },
        secondary && {
          backgroundColor: '#0000',
          borderColor: color,
          borderWidth: responsiveFontSize(0.4),
        },
        style,
      ]}
      underlayColor={colors.greyLight}
      disabled={disable}>
      <>
        <View>
          <AppTextComponent
            style={[
              styles.text,

              secondary && {
                color: color,
              },
              textStyle,
            ]}>
            {title}
          </AppTextComponent>
        </View>
        {isLoading && (
          <View
            style={{
              width: '100%',
              height: '130%',
              position: 'absolute',
              top: 0,
              left: 0,
              opacity: 0.8,
              backgroundColor: colors.grey,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: responsiveFontSize(1),
            }}>
            <ActivityIndicator
              color={colors.redDarkest}
              size={fontSizeXLarge}
            />
          </View>
        )}
      </>
    </TouchableHighlight>
  );
};

export default AppButtonComponent;

const styles = StyleSheet.create({
  btn: {
    minHeight: responsiveHeight(5),
    backgroundColor: colors.redDarkest,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: responsiveFontSize(1),
  },
  text: {
    fontSize: fontSizeLarge,
    fontWeight: '600',
  },
});
