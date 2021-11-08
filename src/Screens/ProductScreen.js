import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {imageUrl} from '../Axios/axios';
import AddToCartButtonComponent from '../Components/AddToCartButtonComponent';
import AppTextComponent from '../Components/AppTextComponent';
import CartComponent from '../Components/CartComponent';
import ScreenComponent from '../Components/ScreenComponent';
import {addToCart, removeFromCart, selectCart} from '../features/cartSlice';
import {setError} from '../features/errorSlice';
import {selectOrders} from '../features/orderSlice';
import colors from '../Utils/colors';
import {
  fontSizeLarge,
  fontSizeMedium,
  fontSizeSmall,
  fontSizeXLarge,
} from '../Utils/Dimensions';
import {openSans} from '../Utils/fonts';

const ProductScreen = ({route}) => {
  const item = route.params.item;
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const orders = useSelector(selectOrders);
  console.warn(item);
  const handleOnPressAddToCartButton = () => {
    if (orders?.length > 0 && orders[0]?.status?.toLowerCase() == 'pending') {
      dispatch(setError('Wait for your pending orders to be completed'));
      return;
    }
    const index = cart.findIndex(product => product.id == item.id);
    if (index > -1) {
      dispatch(removeFromCart({id: item.id}));
    } else {
      dispatch(addToCart({...item, quantity: 0.5}));
    }
  };
  return (
    <View
      color={colors.primary}
      style={{
        paddingHorizontal: responsiveWidth(5),
        backgroundColor: colors.primary,
        flex: 1,
      }}>
      <Image
        source={{uri: imageUrl + item.image}}
        style={{
          width: '100%',
          height: responsiveHeight(30),
          resizeMode: 'cover',
          alignSelf: 'center',
        }}
      />
      <View>
        <AppTextComponent
          style={{fontSize: fontSizeLarge, marginTop: responsiveHeight(1)}}>
          {item.name}
        </AppTextComponent>
        <AppTextComponent
          style={{fontWeight: 'bold', fontSize: fontSizeMedium}}>
          {/* <AppTextComponent style={{fontSize: fontSizeLarge}}> */}
          Rs. {item.price}/
          {(() => {
            let netWeight = item.net;
            netWeight = netWeight.toLowerCase();
            netWeight = netWeight.replace(/[0-9]/g, '');
            // item?.net?.toLowerCase()?.replaceAll()
            return netWeight;
          })()}
        </AppTextComponent>
        {/* </AppTextComponent> */}
        <AppTextComponent
          style={{
            fontSize: responsiveFontSize(1.8),
            marginTop: responsiveHeight(2),
          }}>
          {item.sdesc}
        </AppTextComponent>
        {/* <AppTextComponent style={{fontSize: responsiveFontSize(1.8)}}>
          {JSON.stringify(item)}
        </AppTextComponent> */}
      </View>
      {/* <View></View> */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
          width: responsiveWidth(100),
          // paddingHorizontal: responsiveWidth(4),
          backgroundColor: colors.grey,
          height:
            Platform.OS == 'ios' ? responsiveHeight(9) : responsiveHeight(8),
        }}>
        <TouchableOpacity
          onPress={handleOnPressAddToCartButton}
          style={{
            width: responsiveWidth(70),
            height: '100%',
            alignItems: 'center',
            justifyContent: Platform.OS == 'ios' ? 'flex-start' : 'center',
            paddingTop: Platform.OS == 'ios' ? 15 : 0,
            backgroundColor: colors.redDarkest,
            borderRightColor: colors.white + '6',
            borderRightWidth: 1,
          }}>
          <AppTextComponent
            style={{
              color: colors.white,
              fontWeight: '600',
              fontSize: responsiveFontSize(2.5),
            }}
            allowFontScaling={false}>
            {(() => {
              const index = cart.findIndex(product => product.id == item.id);
              if (index > -1) {
                return 'Remove From Cart';
              }
              return 'Add To Cart';
            })()}
          </AppTextComponent>
        </TouchableOpacity>

        <CartComponent
          style={{
            width: responsiveWidth(30),
            height: '100%',
            borderRadius: 0,
            backgroundColor: colors.redDarkest,
            justifyContent: Platform.OS == 'ios' ? 'flex-start' : 'center',
            paddingTop: Platform.OS == 'ios' ? 10 : 0,
          }}
          relative
          color={colors.white}
          badgeColor={colors.greyDark}
        />
      </View>
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
