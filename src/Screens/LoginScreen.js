import React, {useEffect, useRef, useState} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StatusBar,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {getData, login, selectUser} from '../features/userSlice';

import {fontSizeLarge, fontSizeMedium, screenHeight} from '../Utils/Dimensions';
import colors from '../Utils/colors';

import ScreenComponent from '../Components/ScreenComponent';
import LoadingComponent from '../Components/LoadingComponent';
import AppTextInputComponent from '../Components/AppTextInputComponent';
import LogoComponent from '../Components/LogoComponent';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AppPrimaryButtonComponent from '../Components/AppPrimaryButtonComponent';
import AppTextComponent from '../Components/AppTextComponent';
import {useNavigation} from '@react-navigation/native';
import AppButtonComponent from '../Components/AppButtonComponent';
import {selectError, setError} from '../features/errorSlice';
import {validatePhoneNumber} from '../Utils/validationMethod';
import {signinAPI} from '../Axios/axios';
import {getOrders} from '../features/orderSlice';

const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  // phone number
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneNumberRef = useRef();
  // password
  const [password, setPassword] = useState('');
  const passwordRef = useRef();

  // handle login
  const loginHandler = () => {
    if (!validatePhoneNumber(phoneNumber)) {
      handleError('phoneNumber', 'Invalid Phone Number');
      phoneNumberRef.current.focus();
    } else if (password.length < 6) {
      handleError('password', 'Invalid Password');
      passwordRef.current.focus();
    } else {
      signinUser();
    }
  };

  // calling API and signing in
  const signinUser = async () => {
    setIsLoading(true);
    await signinAPI(phoneNumber, password)
      .then(response => {
        dispatch(login(response));
        dispatch(getData(response.id));
      })
      .catch(e => {
        handleError('', e.message);
        setIsLoading(false);
      });
  };

  // handling error for validations
  const handleError = (type, message) => {
    dispatch(
      setError({
        origin: type,
        message: message,
      }),
    );
  };

  return (
    <ScreenComponent
      color={colors.primary}
      statusBarContentStyle="light-content">
      <KeyboardAwareScrollView>
        <LogoComponent
          style={{
            alignSelf: 'center',
          }}
          width={200}
          height={200}
        />
        <View
          style={{
            paddingHorizontal: responsiveWidth(5),
            marginTop: responsiveHeight(10),
          }}>
          <AppTextInputComponent
            placeholder="Phone Number"
            keyboardType="phone-pad"
            returnKeyType="next"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            blurOnSubmit={false}
            onSubmitEditing={() => passwordRef.current.focus()}
            error={error?.origin == 'phoneNumber'}
            textInputRef={phoneNumberRef}
            icon={() => (
              <Fontisto
                name="mobile"
                color={
                  error?.origin == 'phoneNumber' ? colors.red : colors.white
                }
                size={fontSizeMedium}
              />
            )}
          />
          <AppTextInputComponent
            placeholder="Password"
            error={error?.origin == 'password'}
            keyboardType="default"
            returnKeyType="done"
            value={password}
            secureTextEntry
            onChangeText={text => setPassword(text)}
            blurOnSubmit={true}
            onSubmitEditing={loginHandler}
            textInputRef={passwordRef}
            icon={() => (
              <FontAwesome5
                name="lock"
                color={error?.origin == 'password' ? colors.red : colors.white}
                size={fontSizeMedium}
              />
            )}
          />
          <AppButtonComponent
            title="SIGN IN"
            onPress={loginHandler}
            isLoading={isLoading}
            disable={isLoading}
            style={{
              marginVertical: responsiveHeight(2),
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AppTextComponent style={{color: colors.white}}>
            Not registered yet?{' '}
          </AppTextComponent>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignupScreen')}
            style={{
              borderBottomWidth: 1,
              borderBottomColor: colors.red,
            }}>
            <AppTextComponent
              style={{
                color: colors.red,
              }}>
              SIGNUP
            </AppTextComponent>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </ScreenComponent>
  );
};

export default Login;

const styles = StyleSheet.create({});
