import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ScreenComponent from '../Components/ScreenComponent';
import colors from '../Utils/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppTextComponent from '../Components/AppTextComponent';
import AppButtonComponent from '../Components/AppButtonComponent';
import {
  fontSizeLarge,
  fontSizeXLarge,
  fontSizeMedium,
} from '../Utils/Dimensions';

const OrderDetailScreen = ({route}) => {
  const {item} = route.params;

  return (
    <View style={{backgroundColor: colors.primary, height: '100%'}}>
      <ScrollView>
        <View
          style={{
            backgroundColor:
              item.status == 'pending'
                ? colors.subtleOrange
                : colors.greenDarkest,
            width: responsiveWidth(20),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: responsiveFontSize(3),
            marginHorizontal: responsiveFontSize(3),
            marginTop: responsiveHeight(2),
          }}>
          <AppTextComponent style={{color: colors.primary}}>
            {item.status}
          </AppTextComponent>
        </View>
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

          {item.listdata.map(item => (
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
          width: '100%',
          paddingHorizontal: responsiveWidth(3),
          alignSelf: 'center',
          bottom: 0,
          height: responsiveHeight(15),
          paddingBottom: responsiveHeight(5),
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
        {/* <AppButtonComponent
          style={{
            width: '100%',
          }}
          title="Reorder"
          // onPress={handleCheckout}
        /> */}
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
