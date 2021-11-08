import React, {useEffect, useState} from 'react';
import {Animated, Platform, StyleSheet, Text, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import colors from '../Utils/colors';
import {fontSizeLarge, fontSizeMedium} from '../Utils/Dimensions';
import AppTextComponent from './AppTextComponent';

const ErrorComponent = ({error, setError, isLoading, setIsLoading, type}) => {
  const animatedError = useState(new Animated.Value(-100))[0];

  useEffect(() => {
    error ? handleError() : null;
  }, [error]);

  const handleError = () => {
    Animated.timing(animatedError, {
      toValue: 0,
      // easing: Easing.ease,
      duration: 500,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(animatedError, {
        toValue: -100,
        // easing: Easing.ease(),
        duration: 500,
        useNativeDriver: true,
      }).start();
    }, 3500);
    setTimeout(() => {
      setError('');
    }, 4000);
    setIsLoading(false);
  };

  return error ? (
    <Animated.View
      style={[
        {
          transform: [{translateY: animatedError}],
          top: 0,
          position: 'absolute',
          alignSelf: 'center',
          width: responsiveWidth(100),
          paddingTop: Platform.OS == 'ios' ? responsiveHeight(3.2) : 0,
          backgroundColor: type == 'm' ? colors.white : colors.red,
          justifyContent: 'flex-end',
        },
        type == 'm' &&
          {
            // borderWidth: 1,
            // borderColor: colors.redDarkest,
          },
      ]}>
      <AppTextComponent
        style={{
          color: type == 'm' ? colors.black : colors.white,
          marginVertical: responsiveHeight(1),
          fontWeight: '600',
          fontSize: responsiveFontSize(2.4),
          textAlign: 'center',
          padding: responsiveHeight(1),
        }}>
        {error}
      </AppTextComponent>
    </Animated.View>
  ) : null;
};

export default ErrorComponent;

const styles = StyleSheet.create({});
