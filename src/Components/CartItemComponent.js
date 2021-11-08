import React, {useEffect, useState} from 'react';
import {
  Animated,
  Easing,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Entypo from 'react-native-vector-icons/Entypo';
import {imageUrl} from '../Axios/axios';
import colors from '../Utils/colors';
import {fontSizeLarge, fontSizeMedium} from '../Utils/Dimensions';
import AddButtonComponent from './AddButtonComponent';
import AppTextComponent from './AppTextComponent';
import SubtractButtonComponent from './SubtractButtonComponent';

const CartItemComponent = ({
  image,
  title,
  price,
  quantity,
  addButtonPress,
  subtractButtonPress,
  net,
  onPressDelete,
}) => {
  const animatedHeight = useState(new Animated.Value(responsiveHeight(12)))[0];

  const deleteItem = () => {
    Animated.timing(animatedHeight, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(onPressDelete);
  };
  return (
    <Animated.View
      style={{
        height: animatedHeight,
        backgroundColor: colors.primary,
        overflow: 'hidden',
        flexDirection: 'row',
        paddingVertical: responsiveHeight(1),
      }}>
      <Image
        source={{
          uri: imageUrl + image,
        }}
        style={{
          width: responsiveHeight(10),
          height: '100%',
          resizeMode: 'cover',
          borderRadius: responsiveFontSize(1),
        }}
      />
      <View
        style={{
          marginLeft: responsiveWidth(2),
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View>
          <AppTextComponent style={styles.title}>{title}</AppTextComponent>
          <AppTextComponent style={styles.price}>
            Price: Rs. {price}/{net.toLowerCase().replace(/[0-9]/g, '')}
          </AppTextComponent>
        </View>
        <AppTextComponent style={styles.total}>
          Total: Rs. {(price * quantity).toFixed(2)}
        </AppTextComponent>
      </View>
      <View
        style={{
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          //   backgroundColor: 'red',
        }}>
        <TouchableHighlight
          onPress={deleteItem}
          style={{
            padding: responsiveFontSize(0.5),
          }}
          underlayColor={colors.greyLight}>
          <Entypo name="cross" color={colors.white} size={fontSizeLarge} />
        </TouchableHighlight>
        <View
          style={{
            flexDirection: 'row',
            width: responsiveWidth(23),
            alignItems: 'center',
            justifyContent: 'space-between',
            //   backgroundColor: 'red',
          }}>
          <SubtractButtonComponent onPress={subtractButtonPress} />
          <AppTextComponent style={styles.title}>
            {`${quantity}`.length == 1 ? '0' + quantity : quantity}
          </AppTextComponent>
          <AddButtonComponent onPress={addButtonPress} />
        </View>
      </View>
    </Animated.View>
  );
};

export default CartItemComponent;

const styles = StyleSheet.create({
  title: {
    // fontSize: fontSizeLarge,
  },
  price: {
    // fontWeight: 'bold',
    fontSize: responsiveFontSize(1.6),
    color: colors.greyLighter,
  },
  total: {
    fontWeight: 'bold',
    bottom: 0,
  },
});
