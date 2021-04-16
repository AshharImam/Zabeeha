import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import ProfilePhotoComponent from './ProfilePhotoComponent';
import ScreenComponent from './ScreenComponent';
import profileImage from '../Assets/images/profile.png';
import {logout, selectUser} from '../features/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../Utils/colors';
import {
  fontSizeLarge,
  fontSizeMedium,
  fontSizeXLarge,
  screenWidth,
} from '../Utils/Dimensions';
import {DrawerActions, useNavigation} from '@react-navigation/core';

import {NavigationAction} from '@react-navigation/native';

export default DrawerContentComponent = props => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    // <ScreenComponent>
    <SafeAreaView style={{flex: 1, backgroundColor: colors.primary}}>
      <View style={{flex: 1}}>
        <View
          style={{
            alignSelf: 'center',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20,
          }}>
          <ProfilePhotoComponent image={profileImage} />
          <Text
            style={{
              color: colors.secondary,
              fontSize: fontSizeXLarge,
              marginVertical: 10,
            }}>
            {user}
          </Text>
          <Text
            style={{
              color: colors.secondary,
              fontSize: fontSizeMedium,
              fontWeight: '500',
            }}>
            Balance: <Text style={{fontSize: fontSizeLarge}}>2,000</Text>
          </Text>
        </View>

        <DrawerContentScrollView>
          <TouchableHighlight
            style={{
              padding: 10,
              margin: 8,
              borderRadius: 3,
              // backgroundColor:
              //   props.navigation.state.routeName === 'Dashboard'
              //     ? colors.secondary
              //     : colors.primary,
            }}
            onPress={() => {
              props.navigation.dispatch(DrawerActions.closeDrawer());

              props.navigation.navigate('Dashboard');
            }}
            underlayColor={colors.primary}>
            <Text
              style={{
                color: colors.secondary,
                // marginLeft: 18,
              }}>
              Dashboard
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{padding: 10, margin: 8, borderRadius: 3}}
            onPress={() => {
              props.navigation.dispatch(DrawerActions.closeDrawer());

              props.navigation.navigate('Notifications');
            }}
            underlayColor={colors.primary}>
            <Text
              style={{
                color: colors.secondary,
                // marginLeft: 18,
              }}>
              Notifications
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{padding: 10, margin: 8, borderRadius: 3}}
            onPress={() => {
              props.navigation.dispatch(DrawerActions.closeDrawer());

              props.navigation.navigate('QR Code');
            }}
            underlayColor={colors.primary}>
            <Text
              style={{
                color: colors.secondary,
                // marginLeft: 18,
              }}>
              QR Code
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{padding: 10, margin: 8, borderRadius: 3}}
            onPress={() => {
              props.navigation.dispatch(DrawerActions.closeDrawer());
              props.navigation.navigate('Transactions');
            }}
            underlayColor={colors.primary}>
            <Text
              style={{
                color: colors.secondary,
                // marginLeft: 18,
              }}>
              Transactions
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            style={{padding: 10, margin: 8, borderRadius: 3}}
            onPress={() => {
              props.navigation.dispatch(DrawerActions.closeDrawer());

              props.navigation.navigate('Profile');
            }}
            underlayColor={colors.primary}>
            <Text
              style={{
                color: colors.secondary,
                // marginLeft: 18,
              }}>
              Profile
            </Text>
          </TouchableHighlight>

          <TouchableHighlight
            style={{padding: 10, margin: 8, borderRadius: 3}}
            onPress={() => {
              // props.navigation.dispatch(DrawerActions.closeDrawer());
              // props.navigation.reset({
              //   index: 0,
              //   routes: [{name: 'Home'}],
              // });
              setTimeout(() => {
                dispatch(logout());
              }, 100);
            }}
            underlayColor={colors.primary}>
            <Text
              style={{
                color: colors.secondary,
                // marginLeft: 18,
              }}>
              Logout
            </Text>
          </TouchableHighlight>
        </DrawerContentScrollView>
      </View>
    </SafeAreaView>

    // {/* </ScreenComponent> */}
  );
};
