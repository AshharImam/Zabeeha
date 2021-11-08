import {StackActions, useNavigation} from '@react-navigation/core';
import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {postAddressAPI} from '../Axios/axios';
import AppButtonComponent from '../Components/AppButtonComponent';
import AppTextComponent from '../Components/AppTextComponent';
import AppTextInputComponent from '../Components/AppTextInputComponent';
import {getAddresses, selectTypeOfAddress} from '../features/addressSlice';
import {selectError, setError} from '../features/errorSlice';
import {selectUser} from '../features/userSlice';
import colors from '../Utils/colors';
import {fontSizeLarge} from '../Utils/Dimensions';
import {validatePhoneNumber} from '../Utils/validationMethod';

const AddNewAddressScreen = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const typeAddress = useSelector(selectTypeOfAddress);

  // address state new
  const [add1, setAdd1] = useState('');
  const add1Ref = useRef();
  const [add2, setAdd2] = useState('');
  const add2Ref = useRef();
  const [city, setCity] = useState('');
  const cityRef = useRef();
  const [state, setState] = useState('');
  const stateRef = useRef();
  const [pincode, setPincode] = useState('');
  const pincodeRef = useRef();
  const [mobile, setMobile] = useState('');
  const mobileRef = useRef();
  const [type, setType] = useState();

  const clearInputFields = () => {
    setAdd1('');
    setAdd2('');
    setCity('');
    setState('');
    setPincode('');
    setMobile('');
    setType('');
  };

  const error = useSelector(selectError);

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const handleSaveAddress = () => {
    if (!add1) {
      handleError('add1', 'Address is required');
      add1Ref.current.focus();
    } else if (!city) {
      handleError('city', 'City is required');
      cityRef.current.focus();
    } else if (!state) {
      handleError('state', 'State is required');
      stateRef.current.focus();
    } else if (!pincode) {
      handleError('pincode', 'Pincode is required');
      pincodeRef.current.focus();
    } else if (!validatePhoneNumber(mobile)) {
      handleError('mobile', 'Invalid Phone Number');
      mobileRef.current.focus();
    } else if (!type?.id) {
      handleError('type', 'You must select a Type');
      mobileRef.current.focus();
    } else {
      setIsLoading(true);
      postAddressAPI(user.id, type.id, add1, add2, pincode, city, state, mobile)
        .then(message => {
          dispatch(getAddresses(user.id));
          setIsLoading(false);
          clearInputFields();
          navigation.goBack();
          //   navigation.dispatch(
          //     StackActions.replace('ConfirmOrderScreen', {
          //       address: {
          //         add1: add1,
          //         add2: add2,
          //         city: city,
          //         id: '9',
          //         mobile: '03142766478',
          //         pincode: null,
          //         state: 'state',
          //         type: 'typeId',
          //         uid: '12',
          //       },
          //     }),
          //   );
          //   navigation.('ConfirmOrderScreen', {
          //     address,
          //   });
        })
        .catch(error => {
          handleError('', error.message);
          setIsLoading(false);
        });
    }
  };

  const handleError = (type, message) => {
    dispatch(
      setError({
        origin: type,
        message: message,
      }),
    );
  };
  renderType = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {typeAddress.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{
                margin: responsiveFontSize(0.5),
              }}
              onPress={() => setType(item)}>
              <View
                style={{
                  backgroundColor:
                    type?.id == item?.id ? colors.primary : colors.white,
                  padding: responsiveFontSize(1),
                  borderRadius: responsiveFontSize(5),
                  borderColor:
                    type?.id == item?.id ? colors.primary : colors.greyDark,
                  borderWidth: 1,
                }}>
                <AppTextComponent
                  style={{
                    color:
                      type?.id == item?.id ? colors.white : colors.greyDark,
                  }}>
                  {item.title}
                </AppTextComponent>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  };
  return (
    <SafeAreaView
      style={{
        height: responsiveHeight(90),
        backgroundColor: colors.white,
        bottom: 0,
        position: 'absolute',
        width: '100%',
        borderTopRightRadius: responsiveFontSize(3),
        borderTopLeftRadius: responsiveFontSize(3),
      }}>
      <KeyboardAwareScrollView
        enableOnAndroid
        contentContainerStyle={{
          padding: responsiveFontSize(1),
        }}>
        <AppTextComponent
          style={{
            color: colors.redDarkest,
            fontWeight: 'bold',
            fontSize: fontSizeLarge,
            alignSelf: 'center',
          }}>
          Add New Address
        </AppTextComponent>
        <AppTextInputComponent
          borderColor={colors.greyLight}
          style={styles.textInput}
          color={colors.darkText}
          textInputRef={add1Ref}
          onSubmitEditing={() => add2Ref.current.focus()}
          blurOnSubmit={false}
          placeholder="Address#1"
          autoFocus
          value={add1}
          onChangeText={text => setAdd1(text)}
          error={error?.origin === 'add1'}
        />
        <AppTextInputComponent
          borderColor={colors.greyLight}
          style={styles.textInput}
          color={colors.darkText}
          textInputRef={add2Ref}
          onSubmitEditing={() => cityRef.current.focus()}
          blurOnSubmit={false}
          placeholder="Address#2"
          value={add2}
          onChangeText={text => setAdd2(text)}
          error={error?.origin === 'add2'}
        />
        <AppTextInputComponent
          borderColor={colors.greyLight}
          style={styles.textInput}
          color={colors.darkText}
          textInputRef={cityRef}
          onSubmitEditing={() => stateRef.current.focus()}
          blurOnSubmit={false}
          placeholder="City"
          value={city}
          onChangeText={text => setCity(text)}
          error={error?.origin === 'city'}
        />
        <AppTextInputComponent
          borderColor={colors.greyLight}
          style={styles.textInput}
          color={colors.darkText}
          textInputRef={stateRef}
          onSubmitEditing={() => pincodeRef.current.focus()}
          blurOnSubmit={false}
          placeholder="State"
          value={state}
          onChangeText={text => setState(text)}
          error={error?.origin === 'state'}
        />
        <AppTextInputComponent
          borderColor={colors.greyLight}
          style={styles.textInput}
          color={colors.darkText}
          textInputRef={pincodeRef}
          onSubmitEditing={() => mobileRef.current.focus()}
          blurOnSubmit={false}
          placeholder="Pincode"
          keyboardType="number-pad"
          value={pincode}
          onChangeText={text => setPincode(text)}
          error={error?.origin === 'pincode'}
        />
        <AppTextInputComponent
          borderColor={colors.greyLight}
          style={styles.textInput}
          color={colors.darkText}
          keyboardType="phone-pad"
          textInputRef={mobileRef}
          onSubmitEditing={handleSaveAddress}
          blurOnSubmit={false}
          placeholder="Mobile#"
          value={mobile}
          onChangeText={text => setMobile(text)}
          error={error?.origin === 'mobile'}
        />
        {renderType()}
        <AppButtonComponent
          title="Save Address"
          disable={isLoading}
          isLoading={isLoading}
          onPress={handleSaveAddress}
          style={{
            marginHorizontal: responsiveFontSize(1),
            backgroundColor: colors.primary,
          }}
        />
        <AppButtonComponent
          title="Cancel"
          disable={isLoading}
          onPress={() => {
            setShowModal(false);
          }}
          // secondary
          color={colors.grey}
          style={{
            margin: responsiveFontSize(1),
          }}
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AddNewAddressScreen;

const styles = StyleSheet.create({});
