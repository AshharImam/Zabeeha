import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {useSelector} from 'react-redux';
import {selectCart} from '../features/cartSlice';
import colors from '../Utils/colors';
import {fontSizeSmall} from '../Utils/Dimensions';
import AppTextComponent from './AppTextComponent';

const CartComponent = ({relative = false}) => {
  const navigation = useNavigation();
  const cart = useSelector(selectCart);

  return (
    <TouchableOpacity
      accessibilityRole="button"
      // accessibilityState={isFocused ? {selected: true} : {}}
      // accessibilityLabel={options.tabBarAccessibilityLabel}
      // testID={options.tabBarTestID}
      onPress={() => navigation.navigate('CartScreen')}
      // onLongPress={onLongPress}
      style={[
        {
          width: responsiveWidth(28),
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors.greyLightest,
          borderRadius: responsiveFontSize(3),
          height: responsiveHeight(8),
        },
        !relative && {
          position: 'absolute',
          bottom: 1,
          right: responsiveWidth(4),
        },
      ]}>
      <>
        <View
          style={{
            borderRadius: 100,
            // padding: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <SimpleLineIcons
            name="basket"
            color={colors.grey}
            size={responsiveHeight(3.5)}
          />
        </View>
        {cart.length > 0 && (
          <View
            style={{
              backgroundColor: colors.redDarkest,
              position: 'absolute',
              // padding: responsiveFontSize(0.7),
              borderRadius: responsiveFontSize(2),
              right: responsiveWidth(4),
              top: responsiveHeight(1),
              width: responsiveFontSize(2.5),
              height: responsiveFontSize(2.5),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AppTextComponent
              style={{
                color: colors.greyLightest,
                fontSize: fontSizeSmall,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {cart.length}
            </AppTextComponent>
          </View>
        )}
      </>
    </TouchableOpacity>
  );
};

export default CartComponent;

const styles = StyleSheet.create({});
