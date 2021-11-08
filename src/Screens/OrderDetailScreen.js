import React, {useEffect, useState} from 'react';
import {
  Alert,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ScreenComponent from '../Components/ScreenComponent';
import colors from '../Utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppTextComponent from '../Components/AppTextComponent';
import AppButtonComponent from '../Components/AppButtonComponent';
import {addToCart, selectCart} from '../features/cartSlice';
import {
  fontSizeLarge,
  fontSizeXLarge,
  fontSizeMedium,
} from '../Utils/Dimensions';
import {openSans} from '../Utils/fonts';
import {useDispatch, useSelector} from 'react-redux';
import {setError} from '../features/errorSlice';
import {
  cancelOrder,
  selectCancelOrderLoading,
  selectOrders,
} from '../features/orderSlice';
import LoadingComponent from '../Components/LoadingComponent';
import {Modal} from 'react-native-paper';
import {selectUser} from '../features/userSlice';
import {CommonActions, StackActions} from '@react-navigation/routers';
import {useNavigation} from '@react-navigation/core';

const OrderDetailScreen = ({route}) => {
  // const {item} = route.params;
  const navigation = useNavigation();
  const [item, setItem] = useState(route.params.item);
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const cancelOrderLoading = useSelector(selectCancelOrderLoading);
  const orderList = useSelector(selectOrders);
  const user = useSelector(selectUser);

  useEffect(() => {
    const index = orderList.findIndex(order => order.orderid == item.orderid);
    if (index > -1) {
      setItem(orderList[index]);
    }
  }, [orderList]);

  const redorder = () => {
    if (cart.length > 0) {
      dispatch(setError('Cart is not empty'));
      return;
    }

    // if (index > -1) {
    // dispatch(removeFromCart({id: item.id}));
    // } else {
    item.listdata.map(item => {
      dispatch(
        addToCart({
          ...item,
          net: item?.net ? item?.net : '',
          quantity: Number(item?.quantity),
        }),
      );
    });
    // dispatch(setError({message: 'Order is added to your cart', type: 'm'}));
    // }
    Alert.alert('', 'Order has been added to your cart', [
      {
        text: 'Yes',
        onPress: () => {
          navigation.goBack();
          navigation.dispatch(
            CommonActions.reset({
              history: [
                {key: 'HomeScreen-Cj0yle_EzY3UmQZsKxX3V', type: 'route'},
              ],
              index: 0,
              key: 'tab-3EhxZzhJ-bFbTvu9Ooiwj',
              routeNames: ['HomeScreen', 'OrdersScreen'],
              routes: [
                {
                  key: 'HomeScreen-Cj0yle_EzY3UmQZsKxX3V',
                  name: 'HomeScreen',
                  params: undefined,
                },
                {
                  key: 'OrdersScreen-NHHJKhEwY8WOjI92a4V8z',
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
    ]);
  };

  const handleCancelOrder = () => {
    Alert.alert('Cancel Order?', 'Do you want to cancel this order?', [
      {
        text: 'No',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          dispatch(cancelOrder({orderId: item.orderid, userId: user.id}));
        },
      },
    ]);
  };

  if (cancelOrderLoading == 'pending') {
    return <LoadingComponent />;
  }
  return (
    <View style={{backgroundColor: colors.primary, height: '100%'}}>
      <ScrollView>
        {/* <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: responsiveHeight(2),
            width: '100%',
            paddingHorizontal: responsiveFontSize(3),
          }}>
         
        </View> */}
        <View
          style={{
            padding: responsiveFontSize(3),
            paddingTop: 0,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
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
                backgroundColor:
                  item.status == 'pending'
                    ? colors.pending
                    : item.status == 'completed'
                    ? colors.completed
                    : item.status == 'cancelled'
                    ? colors.cancelled
                    : item.status == 'processing'
                    ? colors.processing
                    : colors.white,
                width: responsiveFontSize(13),
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                padding: responsiveFontSize(0.5),
              }}>
              <AppTextComponent
                style={{
                  color: colors.primary,
                  fontSize: responsiveFontSize(1.8),
                }}>
                {item.status}
              </AppTextComponent>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: responsiveFontSize(4),
              marginTop: responsiveFontSize(1),
            }}>
            <AppTextComponent>
              {item.add1}
              {'\n'}
              {item.add2}
              {'\n'}
              {item.city}
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
              Rs. {Number(item.total_price).toFixed(2)}
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

          {item?.listdata?.map(item => (
            <View
              key={item.title}
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
                x {item.title}
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
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          borderTopColor: colors.black,
          borderTopWidth: 0.5,
          width: '100%',
          alignSelf: 'center',
          bottom: 0,
          // height: responsiveHeight(16),
          paddingBottom:
            item.status === 'pending' ||
            item.status === 'completed' ||
            item.status === 'cancelled'
              ? 0
              : responsiveHeight(5),
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
        <View
          style={{
            paddingVertical: responsiveHeight(0.5),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: responsiveWidth(3),
          }}>
          <AppTextComponent style={{color: colors.greyLight}}>
            Subtotal
          </AppTextComponent>
          <AppTextComponent style={{color: colors.greyLight}}>
            Rs. {Number(item.total_price).toFixed(2)}
          </AppTextComponent>
        </View>
        <View
          style={{
            paddingVertical: responsiveHeight(0.5),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: responsiveWidth(3),
          }}>
          <AppTextComponent style={{color: colors.greyLight}}>
            Delivery fee
          </AppTextComponent>
          <AppTextComponent style={{color: colors.greyLight}}>
            Rs. 0.00
          </AppTextComponent>
        </View>
        <View style={styles.textContainer}>
          <AppTextComponent style={styles.total}>Total</AppTextComponent>
          <AppTextComponent style={styles.total}>
            Rs. {Number(item.total_price).toFixed(2)}
          </AppTextComponent>
        </View>
        {item?.status === 'pending' && (
          <AppButtonComponent
            style={{
              width: '100%',
              padding: responsiveFontSize(1),
              justifyContent: Platform.OS == 'ios' ? 'flex-start' : 'center',
              paddingTop: Platform.OS == 'ios' ? 15 : 0,
              borderRadius: 0,
              height:
                Platform.OS == 'ios'
                  ? responsiveHeight(9)
                  : responsiveHeight(8),
            }}
            title="Cancel Order"
            onPress={handleCancelOrder}
          />
        )}
        {(item?.status === 'completed' || item?.status === 'cancelled') && (
          <AppButtonComponent
            style={{
              width: '100%',
              padding: responsiveFontSize(1),
              justifyContent: Platform.OS == 'ios' ? 'flex-start' : 'center',
              paddingTop: Platform.OS == 'ios' ? 15 : 0,
              borderRadius: 0,
              height:
                Platform.OS == 'ios'
                  ? responsiveHeight(9)
                  : responsiveHeight(8),
            }}
            title="Reorder"
            onPress={redorder}
          />
        )}
      </View>
    </View>
  );
};

export default OrderDetailScreen;

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: responsiveHeight(1),
    paddingHorizontal: responsiveWidth(3),
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
