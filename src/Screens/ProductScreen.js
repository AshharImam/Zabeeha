import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
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
import colors from '../Utils/colors';
import {
  fontSizeLarge,
  fontSizeMedium,
  fontSizeSmall,
  fontSizeXLarge,
} from '../Utils/Dimensions';

const ProductScreen = ({route}) => {
  const item = route.params.item;
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const handleOnPressAddToCartButton = () => {
    const index = cart.findIndex(product => product.id == item.id);
    if (index > -1) {
      dispatch(removeFromCart({id: item.id}));
    } else {
      dispatch(addToCart({...item, quantity: 0.5}));
    }
  };
  return (
    <ScreenComponent
      color={colors.primary}
      style={{paddingHorizontal: responsiveWidth(5)}}>
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
      <View></View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
          width: responsiveWidth(100),
          paddingHorizontal: responsiveWidth(4),
        }}>
        <AddToCartButtonComponent
          relative
          title={(() => {
            const index = cart.findIndex(product => product.id == item.id);
            if (index > -1) {
              return 'Remove From Cart';
            }
            return 'Add To Cart';
          })()}
          width={60}
          onPress={handleOnPressAddToCartButton}
        />
        <CartComponent relative />
      </View>
    </ScreenComponent>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({});
