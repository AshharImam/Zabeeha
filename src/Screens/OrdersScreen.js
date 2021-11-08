import {useNavigation, useNavigationState} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AppTextComponent from '../Components/AppTextComponent';
import ScreenComponent from '../Components/ScreenComponent';
import AppButtonComponent from '../Components/AppButtonComponent';
import {
  getOrders,
  selectFetchOrdersLoading,
  selectOrderLoading,
  selectOrders,
} from '../features/orderSlice';
import colors from '../Utils/colors';
import {selectUser} from '../features/userSlice';
import LoadingComponent from '../Components/LoadingComponent';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {fontSizeLarge, fontSizeSmall} from '../Utils/Dimensions';
import {Badge} from 'react-native-paper';

const OrderComponent = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableHighlight
      onPress={() =>
        navigation.navigate('OrderDetailScreen', {
          item: item,
        })
      }
      underlayColor={colors.greyDark}>
      <View
        style={{
          margin: responsiveFontSize(1),
          padding: responsiveFontSize(1),
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <AppTextComponent
            style={{
              fontSize: fontSizeLarge,
              fontWeight: '500',
            }}>
            Order #{item.orderid}
          </AppTextComponent>
          <View
            style={{
              borderRadius: 10,
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
              alignItems: 'center',
              justifyContent: 'center',
              width: responsiveFontSize(12),
              padding: responsiveFontSize(0.5),
            }}>
            <AppTextComponent
              style={{
                fontSize: responsiveFontSize(1.5),

                textAlign: 'center',
                color: colors.primary,
              }}>
              {item.status}
            </AppTextComponent>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: responsiveHeight(1),
          }}>
          <View>
            <AppTextComponent
              style={{
                fontSize: responsiveFontSize(1.7),
              }}>
              {item.odate}
            </AppTextComponent>
          </View>
          <AppTextComponent
            style={{
              fontSize: fontSizeLarge,
              fontWeight: '500',
            }}>
            Rs. {Number(item.total_price).toFixed(2)}
          </AppTextComponent>
        </View>
      </View>
    </TouchableHighlight>
  );
};
const OrdersScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const orderLoading = useSelector(selectFetchOrdersLoading);
  const orders = useSelector(selectOrders);
  const navigation = useNavigation();

  // useEffect(() => {
  // dispatch(getOrders(user.id));
  // }, []);

  useEffect(() => {
    navigation.addListener('state', navigationState => {
      if (navigationState.data.state.index == 1) {
        dispatch(getOrders(user.id));
      }
    });
  }, [navigation]);

  return (
    <View style={{backgroundColor: colors.primary, height: '100%'}}>
      <SafeAreaView style={{height: '100%'}}>
        {/* {orderLoading == 'pending' && <LoadingComponent />} */}
        {/* <AppTextComponent>{JSON.stringify(orders[0])}</AppTextComponent> */}
        <FlatList
          style={{
            height: '100%',
          }}
          keyExtractor={item => item.orderid.toString()}
          data={orders}
          renderItem={({item}) => <OrderComponent item={item} />}
          onRefresh={() => {
            dispatch(getOrders(user.id));
          }}
          refreshing={orderLoading == 'pending'}
        />
      </SafeAreaView>
    </View>
  );
};

export default OrdersScreen;

const styles = StyleSheet.create({});
