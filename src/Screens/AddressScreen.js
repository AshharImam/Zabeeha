import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {postAddressAPI} from '../Axios/axios';
import AddressComponent from '../Components/AddressComponent';
import AppButtonComponent from '../Components/AppButtonComponent';
import AppTextComponent from '../Components/AppTextComponent';
import AppTextInputComponent from '../Components/AppTextInputComponent';
import LoadingComponent from '../Components/LoadingComponent';
import ScreenComponent from '../Components/ScreenComponent';
import {
  getAddresses,
  selectAddresses,
  selectAddressLoading,
  selectTypeOfAddress,
} from '../features/addressSlice';
import {selectError, setError} from '../features/errorSlice';
import {selectUser} from '../features/userSlice';
import colors from '../Utils/colors';
import {fontSizeLarge, fontSizeXLarge} from '../Utils/Dimensions';
import {validatePhoneNumber} from '../Utils/validationMethod';

const AddressScreen = () => {
  const addressLoading = useSelector(selectAddressLoading);
  const addresses = useSelector(selectAddresses);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  useEffect(() => {
    if (!addresses) {
      dispatch(getAddresses(user.id));
    }
  }, [addresses]);

  const handleSelectAddress = address => {
    console.warn(address);
    navigation.navigate('ConfirmOrderScreen', {
      address,
    });
  };

  return (
    <View
      color={colors.primary}
      style={{
        flex: null,
        backgroundColor: colors.primary,
        height: '100%',
        // paddingBottom: responsiveHeight(3),
      }}>
      {addressLoading ? (
        <LoadingComponent />
      ) : (
        <FlatList
          contentContainerStyle={{
            padding: responsiveFontSize(1),
          }}
          data={addresses}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => {
            return (
              <AddressComponent
                item={item}
                onPress={() => handleSelectAddress(item)}
              />
            );
          }}
        />
      )}
      <AppButtonComponent
        title="Add New Address"
        // onPress={() => setShowModal(true)}
        onPress={() => navigation.navigate('AddNewAddress')}
        style={{
          // margin: responsiveFontSize(1),
          width: '100%',
          padding: responsiveFontSize(1),
          justifyContent: Platform.OS == 'ios' ? 'flex-start' : 'center',
          paddingTop: Platform.OS == 'ios' ? 15 : 0,
          borderRadius: 0,
          height:
            Platform.OS == 'ios' ? responsiveHeight(9) : responsiveHeight(8),
        }}
      />
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  textInput: {
    // backgroundColor: colors.greyLightest,
  },
});
