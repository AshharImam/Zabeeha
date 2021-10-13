import React, {useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableHighlight,
  Modal,
  ScrollView,
  SafeAreaView,
  Alert,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Zocial from 'react-native-vector-icons/Zocial';
import Entypo from 'react-native-vector-icons/Entypo';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {login, selectUser} from '../features/userSlice';

import {fontSizeLarge, fontSizeMedium} from '../Utils/Dimensions';
import colors from '../Utils/colors';

import ScreenComponent from '../Components/ScreenComponent';
import AppTextInputComponent from '../Components/AppTextInputComponent';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AppPrimaryButtonComponent from '../Components/AppPrimaryButtonComponent';
import AppTextComponent from '../Components/AppTextComponent';
import {RadioButton} from 'react-native-paper';
import {selectError, setError} from '../features/errorSlice';
import AppButtonComponent from '../Components/AppButtonComponent';
import {validateEmail, validatePhoneNumber} from '../Utils/validationMethod';
import {signupAPI, updateProfileAPI} from '../Axios/axios';
import {useNavigation} from '@react-navigation/native';
import {openSans} from '../Utils/fonts';

const EditProfileComponent = ({
  placeholder,
  value,
  style,
  onChangeText,
  placeholderTextColor = colors.grey,
  borderColor = colors.white,
  icon,
  textInputRef,
  color = colors.white,
  onSubmitEditing = () => {},
  blurOnSubmit = true,
  error = false,
  editable,
  ...otherProps
}) => {
  const inputRef = useRef();

  return (
    <TouchableWithoutFeedback
      onPress={() => inputRef.current.focus()}
      disabled={!editable}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: responsiveHeight(1.5),
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: responsiveWidth(4),
            }}>
            {icon()}
          </View>
          <AppTextComponent
            style={{
              marginLeft: responsiveWidth(3),
              color: colors.grey,
            }}>
            {placeholder}
          </AppTextComponent>
        </View>
        <TextInput
          editable={editable}
          ref={ref => {
            if (textInputRef) {
              textInputRef.current = ref;
            }
            inputRef.current = ref;
          }}
          value={value}
          onChangeText={onChangeText}
          blurOnSubmit={blurOnSubmit}
          onSubmitEditing={onSubmitEditing}
          {...otherProps}
          style={{
            textAlign: 'right',
            fontFamily: openSans,
            fontSize: fontSizeMedium,
            color: colors.white,
            flex: 1,
          }}
          ellipsizeMode="tail"
          numberOfLines={1}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const Divider = () => (
  <View
    style={{
      height: responsiveHeight(0.2),
      backgroundColor: colors.grey,
      width: '100%',
      opacity: 0.4,
    }}></View>
);

const PersonalProfileScreen = () => {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const user = useSelector(selectUser);
  const error = useSelector(selectError);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [editable, setEditable] = useState(false);
  const editableRef = useRef(false);

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

  useEffect(() => {
    setUser();
  }, [user]);

  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      // Prevent default behavior of leaving the screen
      e.preventDefault();
      // Prompt the user before leaving the screen
      if (editableRef.current) {
        Alert.alert(
          'Discard changes?',
          'You have unsaved changes. Are you sure to discard them and leave the screen?',
          [
            {text: "Don't leave", style: 'cancel', onPress: () => {}},
            {
              text: 'Discard',
              style: 'destructive',
              // If the user confirmed, then we dispatch the action we blocked earlier
              // This will continue the action that had triggered the removal of the screen
              onPress: () => navigation.dispatch(e.data.action),
            },
          ],
        );
      } else if (!editableRef.current) {
        navigation.dispatch(e.data.action);
      }
    });
  }, [navigation]);

  const setUser = () => {
    setName(user.fname + ' ' + user.lname);
    setEmail(user.email);
    setPhoneNumber(user.mobile);
    setCity(user.city);
  };

  const setEditableState = value => {
    setEditable(value);
    editableRef.current = value;
  };

  // handling button pressed and handling validations
  const handleOnPressSubmit = () => {
    // setEditable(false);
    // return;

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
    } else {
      // signup user function
      signupUser();
    }
  };

  const signupUser = async () => {
    let nameSplitted = name;
    nameSplitted = nameSplitted.split(' ');
    const firstName = nameSplitted[0];
    nameSplitted.shift();
    const lastName = nameSplitted.join(' ');
    setIsLoading(true);

    await updateProfileAPI(
      user.id,
      firstName,
      lastName,
      email,
      phoneNumber,
      user.password,
      city,
    )
      .then(res => {
        dispatch(login(res));
        setIsLoading(false);
        Alert.alert('Profile Updated Successfuly', '', [
          {
            text: 'OK',
            onPress: () => setEditableState(false),
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              height: responsiveHeight(5),
              alignItems: 'center',
            }}>
            {!editable && (
              <TouchableHighlight
                style={{
                  padding: responsiveFontSize(1),
                  borderRadius: 100,
                }}
                underlayColor={colors.grey}
                onPress={() => {
                  setEditableState(true);
                  setTimeout(() => {
                    nameRef.current.focus();
                  }, 100);
                }}>
                <Entypo
                  name="edit"
                  size={fontSizeLarge}
                  color={colors.redDarkest}
                />
              </TouchableHighlight>
            )}
          </View>
          <EditProfileComponent
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
                color={error?.origin == 'name' ? colors.red : colors.grey}
                size={fontSizeMedium}
              />
            )}
            editable={editable}
          />
          <Divider />

          <EditProfileComponent
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
                color={error?.origin == 'email' ? colors.red : colors.grey}
                size={fontSizeMedium}
              />
            )}
            editable={editable}
          />
          <Divider />

          <EditProfileComponent
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
                  error?.origin == 'phoneNumber' ? colors.red : colors.grey
                }
                size={fontSizeMedium}
              />
            )}
            editable={editable}
          />
          <Divider />
          <EditProfileComponent
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
                color={error?.origin == 'city' ? colors.red : colors.grey}
                size={fontSizeMedium}
              />
            )}
            editable={editable}
          />
          <Divider />
          {editable && (
            <View>
              <AppButtonComponent
                title="Save"
                onPress={handleOnPressSubmit}
                isLoading={isLoading}
                disable={isLoading}
                style={{
                  marginVertical: responsiveHeight(2),
                }}
              />
              <AppButtonComponent
                title="Cancel"
                onPress={() => {
                  setEditableState(false);
                  setUser();
                }}
                disable={isLoading}
                color={colors.white}
                secondary
              />
            </View>
          )}
        </View>
      </KeyboardAwareScrollView>
    </ScreenComponent>
  );
};

export default PersonalProfileScreen;

const styles = StyleSheet.create({});
