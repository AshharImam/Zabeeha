import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Modal,
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
  const typeAddress = useSelector(selectTypeOfAddress);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

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

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const error = useSelector(selectError);

  useEffect(() => {
    if (!addresses) {
      dispatch(getAddresses(user.id));
    }
  }, [addresses]);

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
          setShowModal(false);
          setIsLoading(false);
          clearInputFields();
        })
        .catch(error => {
          handleError('', error.message);
          setIsLoading(false);
        });
    }
  };

  const clearInputFields = () => {
    setAdd1('');
    setAdd2('');
    setCity('');
    setState('');
    setPincode('');
    setMobile('');
    setType('');
  };

  const handleSelectAddress = address => {
    navigation.navigate('ConfirmOrderScreen', {
      address,
    });
  };

  const handleError = (type, message) => {
    dispatch(
      setError({
        origin: type,
        message: message,
      }),
    );
  };

  const renderType = () => {
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
    <View
      color={colors.primary}
      style={{
        flex: null,
        backgroundColor: colors.primary,
        height: '100%',
        paddingBottom: responsiveHeight(3),
      }}>
      {addressLoading ? (
        <LoadingComponent />
      ) : (
        <FlatList
          style={{
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
        onPress={() => setShowModal(true)}
        style={{
          margin: responsiveFontSize(1),
        }}
      />
      <Modal visible={showModal} transparent animationType="slide">
        <TouchableHighlight
          underlayColor={colors.black + '33'}
          onPress={() => setShowModal(false)}
          style={{
            height: '100%',
            backgroundColor: colors.black + '33',
          }}>
          <TouchableWithoutFeedback>
            <SafeAreaView
              style={{
                height: responsiveHeight(90),
                backgroundColor: colors.white,
                bottom: 0,
                position: 'absolute',
                width: '100%',
                borderRadius: responsiveFontSize(3),
              }}>
              <KeyboardAwareScrollView
                style={{
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
              </KeyboardAwareScrollView>
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
                secondary
                color={colors.primary}
                style={{
                  margin: responsiveFontSize(1),
                }}
              />
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </TouchableHighlight>
      </Modal>
    </View>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({
  textInput: {
    // backgroundColor: colors.greyLightest,
  },
});
