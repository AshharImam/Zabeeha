import React, {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Divider} from 'react-native-paper';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import AppButtonComponent from '../Components/AppButtonComponent';
import AppTextComponent from '../Components/AppTextComponent';
import CartItemComponent from '../Components/CartItemComponent';
import ScreenComponent from '../Components/ScreenComponent';
import {
  addToCart,
  emptyCart,
  removeFromCart,
  selectCart,
  subtractFromCart,
} from '../features/cartSlice';
import colors from '../Utils/colors';
import {
  fontSizeLarge,
  fontSizeMedium,
  fontSizeXLarge,
} from '../Utils/Dimensions';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {
  checkoutOrder,
  selectOrderLoading,
  setOrderLoading,
} from '../features/orderSlice';
import {selectUser} from '../features/userSlice';

const ConfirmOrderScreen = ({route}) => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector(selectUser);
  const orderLoading = useSelector(selectOrderLoading);

  useEffect(() => {
    if (orderLoading === 'fulfilled') {
      Alert.alert(
        'Order placed successfully',
        'You can track your orders in orders tab',
        [
          {
            text: 'OK',
            onPress: () => {
              dispatch(setOrderLoading(false));
              dispatch(emptyCart());
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: 'DrawerNavigation'}],
                }),
              );

              navigation.dispatch(
                CommonActions.reset({
                  history: [
                    {key: 'HomeScreen-XnGEe8cBG2B22Cz94ifbe', type: 'route'},
                    {key: 'OrdersScreen-V8TPMYIrQ8RCqW736U7h0', type: 'route'},
                  ],
                  index: 2,
                  key: 'tab-DBsSgp7lj1ZmTGMtjWpZH',
                  routeNames: ['HomeScreen', 'ShopsScreen', 'OrdersScreen'],
                  routes: [
                    {
                      key: 'HomeScreen-XnGEe8cBG2B22Cz94ifbe',
                      name: 'HomeScreen',
                      params: undefined,
                    },
                    {
                      key: 'ShopsScreen-vuUg1ita9c6y1tVcygTyB',
                      name: 'ShopsScreen',
                      params: undefined,
                    },
                    {
                      key: 'OrdersScreen-V8TPMYIrQ8RCqW736U7h0',
                      name: 'OrdersScreen',
                      params: undefined,
                    },
                  ],
                  stale: false,
                  type: 'tab',
                }),
              );
            },
          },
        ],
      );
    }
  }, [orderLoading]);

  const handleCheckout = () => {
    var productIdCsv = '',
      quantityCsv = '';
    cart.forEach(element => {
      productIdCsv = productIdCsv + element.id + ',';
      quantityCsv = quantityCsv + element.quantity + ',';
    });
    productIdCsv = productIdCsv.substring(0, productIdCsv.length - 1);
    quantityCsv = quantityCsv.substring(0, quantityCsv.length - 1);

    dispatch(
      checkoutOrder({
        productIdCsv,
        quantityCsv,
        addId: route.params.address.id,
        total: cart.reduce(calculateTotal, 0),
        userId: user.id,
      }),
    );
  };

  const calculateTotal = (accumulator, currentItem) =>
    accumulator + Number(currentItem.price) * Number(currentItem.quantity);

  return (
    <View style={{backgroundColor: colors.primary, height: '100%'}}>
      <ScrollView>
        <View
          style={{
            padding: responsiveFontSize(3),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ionicons
              name="location-outline"
              size={fontSizeXLarge}
              color={colors.redDarkest}
            />
            <AppTextComponent
              style={{
                fontSize: fontSizeLarge,
                fontWeight: 'bold',
                marginLeft: responsiveWidth(2),
              }}>
              Delivery address
            </AppTextComponent>
          </View>
          <View
            style={{
              marginHorizontal: responsiveFontSize(4),
              marginTop: responsiveFontSize(1),
            }}>
            <AppTextComponent>
              {route.params.address.add1}
              {'\n'}
              {route.params.address.add2}
              {'\n'}
              {route.params.address.city}
              {/* {JSON.stringify(route.params.address)} */}
            </AppTextComponent>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: responsiveFontSize(3),
            paddingBottom: responsiveFontSize(3),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ionicons
              name="wallet-outline"
              size={fontSizeXLarge}
              color={colors.redDarkest}
            />
            <AppTextComponent
              style={{
                fontSize: fontSizeLarge,
                fontWeight: 'bold',
                marginLeft: responsiveWidth(2),
              }}>
              Payment method
            </AppTextComponent>
          </View>
          <View
            style={{
              marginHorizontal: responsiveFontSize(4),
              marginTop: responsiveFontSize(1),

              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <AppTextComponent>
              <FontAwesome5
                name="money-bill"
                size={fontSizeMedium}
                color={colors.white}
              />
              {'\t'}Cash
            </AppTextComponent>
            <AppTextComponent>
              Rs. {cart.reduce(calculateTotal, 0).toFixed(2)}
            </AppTextComponent>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: responsiveFontSize(3),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: responsiveFontSize(1),
            }}>
            <Ionicons
              name="receipt-outline"
              size={fontSizeXLarge}
              color={colors.redDarkest}
            />
            <AppTextComponent
              style={{
                fontSize: fontSizeLarge,
                fontWeight: 'bold',
                marginLeft: responsiveWidth(2),
              }}>
              Order summary
            </AppTextComponent>
          </View>

          {cart.map(item => (
            <View
              key={item.id}
              style={{
                marginHorizontal: responsiveFontSize(4),
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: responsiveHeight(0.5),
              }}>
              <AppTextComponent
                style={{
                  flex: 1,
                }}
                ellipsizeMode="tail"
                numberOfLines={1}>
                {`${item.quantity}`.length == 1
                  ? '0' + item.quantity
                  : item.quantity}{' '}
                x {item.name}
              </AppTextComponent>
              <AppTextComponent>
                Rs. {(item.quantity * item.price).toFixed(2)}
              </AppTextComponent>
            </View>
          ))}
          <View
            style={{
              height: 1,
              backgroundColor: colors.greyDarker,
              marginHorizontal: responsiveFontSize(4),
              marginVertical: responsiveFontSize(2),
            }}></View>
          <View>
            <View
              style={{
                marginHorizontal: responsiveFontSize(4),
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: responsiveHeight(0.5),
              }}>
              <AppTextComponent style={{color: colors.greyLight}}>
                Subtotal
              </AppTextComponent>
              <AppTextComponent style={{color: colors.greyLight}}>
                Rs. {cart.reduce(calculateTotal, 0).toFixed(2)}
              </AppTextComponent>
            </View>
            <View
              style={{
                marginHorizontal: responsiveFontSize(4),
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: responsiveHeight(0.5),
              }}>
              <AppTextComponent style={{color: colors.greyLight}}>
                Delivery fee
              </AppTextComponent>
              <AppTextComponent style={{color: colors.greyLight}}>
                Rs. 0.00
              </AppTextComponent>
            </View>
          </View>
        </View>
      </ScrollView>

      {cart.length > 0 && (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            paddingHorizontal: responsiveWidth(3),
            alignSelf: 'center',
            bottom: responsiveHeight(5),
            backgroundColor: colors.primary,
            elevation: 10,
            shadowColor: colors.greyDarkest,
            shadowOpacity: 1,
            shadowRadius: 10,
            shadowOffset: {
              width: 1,
              height: -1,
            },
          }}>
          <View style={styles.textContainer}>
            <AppTextComponent style={styles.total}>Total</AppTextComponent>
            <AppTextComponent style={styles.total}>
              Rs. {cart.reduce(calculateTotal, 0).toFixed(2)}
            </AppTextComponent>
          </View>
          <AppButtonComponent
            style={{
              width: '100%',
            }}
            isLoading={orderLoading === 'pending'}
            disable={orderLoading === 'pending'}
            title="Checkout"
            onPress={handleCheckout}
          />
        </View>
      )}

      {/* <AppTextComponent>{JSON.stringify(cart)}</AppTextComponent> */}
    </View>
  );
};

export default ConfirmOrderScreen;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1),
  },
  subTotal: {
    fontSize: fontSizeLarge,
    fontWeight: '500',
  },
  total: {
    fontSize: fontSizeLarge,
    fontWeight: 'bold',
  },
});
