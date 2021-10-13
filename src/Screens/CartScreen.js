import React from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
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
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import AppButtonComponent from '../Components/AppButtonComponent';
import AppTextComponent from '../Components/AppTextComponent';
import CartItemComponent from '../Components/CartItemComponent';
import ScreenComponent from '../Components/ScreenComponent';
import {
  addToCart,
  removeFromCart,
  selectCart,
  subtractFromCart,
} from '../features/cartSlice';
import colors from '../Utils/colors';
import {fontSizeLarge} from '../Utils/Dimensions';
import {CommonActions, useNavigation} from '@react-navigation/native';

const CartScreen = () => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const addButtonPress = id => {
    dispatch(addToCart({id: id, quantity: 0.5}));
  };

  const subtractButtonPress = (id, quantity) => {
    if (quantity > 0.5) {
      dispatch(
        subtractFromCart({
          id,
          quantity: 0.5,
        }),
      );
    }
  };

  const onPressDelete = id => {
    dispatch(removeFromCart({id}));
  };

  const calculateTotal = (accumulator, currentItem) =>
    accumulator + Number(currentItem.price) * Number(currentItem.quantity);

  return (
    <View style={{backgroundColor: colors.primary, height: '100%'}}>
      {cart.length == 0 && (
        <View
          style={{
            height: responsiveHeight(50),
            marginTop: responsiveHeight(25),
          }}>
          <SimpleLineIcons
            name="basket"
            color={colors.greyLight}
            size={responsiveFontSize(25)}
            style={{
              alignSelf: 'center',
              // left: responsiveWidth(18),
              transform: [{translateX: -responsiveFontSize(2.5)}],
            }}
          />

          <AppButtonComponent
            title="Browse"
            onPress={() => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 2,
                  routes: [
                    {
                      name: 'DrawerNavigation',
                    },
                    {name: 'CategoriesScreen'},
                  ],
                }),
              );
            }}
            style={{
              width: responsiveWidth(40),
              alignSelf: 'center',
            }}
          />
        </View>
      )}
      <FlatList
        style={{
          paddingHorizontal: responsiveWidth(3),
          marginBottom: responsiveHeight(15),
        }}
        data={cart}
        renderItem={({item}) => (
          <CartItemComponent
            title={item.name}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
            net={item.net}
            addButtonPress={() => addButtonPress(item.id)}
            subtractButtonPress={() =>
              subtractButtonPress(item.id, item.quantity)
            }
            onPressDelete={() => onPressDelete(item.id)}
          />
        )}
        ItemSeparatorComponent={() => (
          <View style={{height: 1, backgroundColor: colors.white + '2'}} />
        )}
        ListFooterComponent={() =>
          cart.length > 0 && (
            <View>
              <View style={styles.textContainer}>
                <AppTextComponent style={styles.subTotal}>
                  Subtotal
                </AppTextComponent>
                <AppTextComponent style={styles.subTotal}>
                  Rs. {cart.reduce(calculateTotal, 0).toFixed(2)}
                </AppTextComponent>
              </View>
              <View style={styles.textContainer}>
                <AppTextComponent>Delivery Fee</AppTextComponent>
                <AppTextComponent>Rs. 0.00</AppTextComponent>
              </View>
            </View>
          )
        }
      />

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
            title="Proceed To Checkout"
            onPress={() => navigation.navigate('AddressScreen')}
          />
        </View>
      )}

      {/* <AppTextComponent>{JSON.stringify(cart)}</AppTextComponent> */}
    </View>
  );
};

export default CartScreen;

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
