import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableHighlight,
  Modal,
  ScrollView,
  SafeAreaView,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Zocial from 'react-native-vector-icons/Zocial';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {login, selectUser} from '../features/userSlice';

import {fontSizeLarge, fontSizeMedium} from '../Utils/Dimensions';
import colors from '../Utils/colors';

import ScreenComponent from '../Components/ScreenComponent';
import AppTextInputComponent from '../Components/AppTextInputComponent';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AppPrimaryButtonComponent from '../Components/AppPrimaryButtonComponent';
import AppTextComponent from '../Components/AppTextComponent';
import {RadioButton} from 'react-native-paper';
import {selectError, setError} from '../features/errorSlice';
import AppButtonComponent from '../Components/AppButtonComponent';
import {validateEmail, validatePhoneNumber} from '../Utils/validationMethod';
import {signupAPI} from '../Axios/axios';
import {useNavigation} from '@react-navigation/native';

const SignupScreen = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const [checked, setChecked] = useState(false);
  const userSelectorUser = useSelector(selectUser);
  const error = useSelector(selectError);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  // name
  const [name, setName] = useState('');
  const nameRef = useRef();
  // email
  const [email, setEmail] = useState('');
  const emailRef = useRef();
  // phone number
  const [phoneNumber, setPhoneNumber] = useState('');
  const phoneNumberRef = useRef();
  // password
  const [password, setPassword] = useState('');
  const passwordRef = useRef();
  // confirm password
  const [confirmPassword, setConfirmPassword] = useState('');
  const confirmPassowrdRef = useRef();
  // city
  const [city, setCity] = useState('');
  const cityRef = useRef();

  // handling button pressed and handling validations
  const handleOnPressSubmit = () => {
    if (!checked) {
      dispatch(setError('Please accet the terms & conditions'));
    } else {
      if (!name) {
        handleError('name', 'Name could not be empty');
        nameRef.current.focus();
      } else if (!email || !validateEmail(email)) {
        handleError('email', 'Invalid Email');
        emailRef.current.focus();
      } else if (!phoneNumber || !validatePhoneNumber(phoneNumber)) {
        handleError('phoneNumber', 'Invalid Phone Number');
        phoneNumberRef.current.focus();
      } else if (!city) {
        handleError('city', 'PLease enter a city');
        cityRef.current.focus();
      } else if (!password || password.length < 6) {
        handleError('password', 'Password must be 6 digits or greater');
        passwordRef.current.focus();
      } else if (password != confirmPassword) {
        handleError('confirmPassowrd', 'Your passwords does not match!');
        confirmPassowrdRef.current.focus();
      } else {
        // signup user function
        signupUser();
      }
    }
  };

  const signupUser = async () => {
    let nameSplitted = name;
    nameSplitted = nameSplitted.split(' ');
    const firstName = nameSplitted[0];
    nameSplitted.shift();
    const lastName = nameSplitted.join(' ');

    await signupAPI(firstName, lastName, email, password, phoneNumber, city)
      .then(() => {
        Alert.alert('Profile Ceated Successfuly', '', [
          {
            text: 'OK',
            onPress: () => navigation.goBack(),
          },
        ]);
      })
      .catch(e => {
        setIsLoading(false);
        handleError('', e.message);
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
        <View
          style={{
            marginTop: responsiveHeight(4),
            paddingHorizontal: responsiveWidth(5),
          }}>
          <AppTextInputComponent
            placeholder="Full Name"
            value={name}
            onChangeText={text => setName(text)}
            textInputRef={nameRef}
            blurOnSubmit={false}
            onSubmitEditing={() => emailRef.current.focus()}
            error={error?.origin == 'name'}
            returnKeyType="next"
            keyboardType="default"
            icon={() => (
              <FontAwesome5
                name="user-alt"
                color={error?.origin == 'name' ? colors.red : colors.white}
                size={fontSizeMedium}
              />
            )}
          />
          <AppTextInputComponent
            placeholder="Email"
            textInputRef={emailRef}
            blurOnSubmit={false}
            onSubmitEditing={() => phoneNumberRef.current.focus()}
            value={email}
            error={error?.origin == 'email'}
            onChangeText={text => setEmail(text)}
            returnKeyType="next"
            keyboardType="email-address"
            icon={() => (
              <Zocial
                name="email"
                color={error?.origin == 'email' ? colors.red : colors.white}
                size={fontSizeMedium}
              />
            )}
          />
          <AppTextInputComponent
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
            textInputRef={phoneNumberRef}
            blurOnSubmit={false}
            error={error?.origin == 'phoneNumber'}
            onSubmitEditing={() => cityRef.current.focus()}
            returnKeyType="next"
            keyboardType="phone-pad"
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
            placeholder="City"
            value={city}
            onChangeText={text => setCity(text)}
            textInputRef={cityRef}
            blurOnSubmit={false}
            error={error?.origin == 'city'}
            onSubmitEditing={() => passwordRef.current.focus()}
            returnKeyType="next"
            keyboardType="default"
            icon={() => (
              <FontAwesome5
                name="city"
                color={error?.origin == 'city' ? colors.red : colors.white}
                size={fontSizeMedium}
              />
            )}
          />
          <AppTextInputComponent
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            textInputRef={passwordRef}
            blurOnSubmit={false}
            error={error?.origin == 'password'}
            onSubmitEditing={() => confirmPassowrdRef.current.focus()}
            returnKeyType="next"
            keyboardType="default"
            secureTextEntry
            icon={() => (
              <FontAwesome5
                name="lock"
                color={error?.origin == 'password' ? colors.red : colors.white}
                size={fontSizeMedium}
              />
            )}
          />
          <AppTextInputComponent
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            textInputRef={confirmPassowrdRef}
            blurOnSubmit={true}
            error={error?.origin == 'confirmPassword'}
            returnKeyType="done"
            onSubmitEditing={handleOnPressSubmit}
            keyboardType="default"
            secureTextEntry
            icon={() => (
              <FontAwesome5
                name="lock"
                color={
                  error?.origin == 'confirmPassword' ? colors.red : colors.white
                }
                size={fontSizeMedium}
              />
            )}
          />
          <TouchableHighlight
            onPress={() => setChecked(!checked)}
            underlayColor={colors.red + '66'}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <RadioButton
                status={checked ? 'checked' : 'unchecked'}
                color={colors.red}
                onPress={() => setChecked(!checked)}
                uncheckedColor={colors.red}
              />
              <AppTextComponent
                style={{
                  color: colors.white,
                }}>
                I accept the{' '}
              </AppTextComponent>
              <TouchableOpacity onPress={() => setShowTermsModal(true)}>
                <AppTextComponent
                  style={{
                    color: colors.white,
                    textDecorationLine: 'underline',
                  }}>
                  terms and conditions
                </AppTextComponent>
              </TouchableOpacity>
            </View>
          </TouchableHighlight>
          <AppButtonComponent
            title="SIGN UP"
            onPress={handleOnPressSubmit}
            isLoading={isLoading}
            disable={isLoading}
            style={{
              marginVertical: responsiveHeight(2),
            }}
          />
        </View>
      </KeyboardAwareScrollView>
      <Modal visible={showTermsModal} animationType="slide">
        <SafeAreaView>
          <ScrollView
            style={{
              paddingHorizontal: responsiveWidth(2),
              height: responsiveHeight(87),
            }}>
            <AppTextComponent
              style={{
                fontSize: fontSizeLarge,
                color: colors.greyDarkest,
              }}>
              Terms & Conditions
            </AppTextComponent>
            <AppTextComponent
              style={{
                fontSize: fontSizeMedium,
                color: colors.greyDarkest,
              }}>
              {'\n'}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              quis odio accumsan, tincidunt ligula vitae, lobortis diam. Etiam
              eros quam, interdum ut varius a, convallis sed sapien. Ut luctus
              quam sed orci congue vehicula. Nunc sit amet gravida neque. Ut
              accumsan, velit in tristique vehicula, ante ligula rutrum neque,
              in dictum elit urna id odio. Maecenas sit amet eros non quam
              tempor efficitur. Maecenas porta bibendum nisl, sed dignissim enim
              congue hendrerit. {'\n'}
              {'\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Praesent quis odio accumsan, tincidunt ligula vitae, lobortis
              diam. Etiam eros quam, interdum ut varius a, convallis sed sapien.
              Ut luctus quam sed orci congue vehicula. Nunc sit amet gravida
              neque. Ut accumsan, velit in tristique vehicula, ante ligula
              rutrum neque, in dictum elit urna id odio. Maecenas sit amet eros
              non quam tempor efficitur. Maecenas porta bibendum nisl, sed
              {'\n'}
              dignissim enim congue hendrerit.
            </AppTextComponent>
          </ScrollView>
          <AppButtonComponent
            title="Close"
            onPress={() => setShowTermsModal(false)}
            style={{
              width: responsiveWidth(95),
              alignSelf: 'center',
            }}
          />
        </SafeAreaView>
      </Modal>
    </ScreenComponent>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
