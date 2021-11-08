import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {logout, selectUser} from '../features/userSlice';
import {useDispatch, useSelector} from 'react-redux';
import colors from '../Utils/colors';
import {
  fontSizeLarge,
  fontSizeMedium,
  fontSizeSmall,
  fontSizeXLarge,
  screenHeight,
  screenWidth,
} from '../Utils/Dimensions';
import {
  DrawerActions,
  useNavigation,
  useNavigationState,
} from '@react-navigation/core';

// import icon from '../Assets/images/icon.png';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import {NavigationAction} from '@react-navigation/native';
import {homeMadeApple} from '../Utils/fonts';
import AppTextComponent from './AppTextComponent';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import LogoComponent from './LogoComponent';
import deviceInfoModule from 'react-native-device-info';
import FastImage from 'react-native-fast-image';
import {emptyCart} from '../features/cartSlice';

export default DrawerContentComponent = props => {
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
          }}>
          <LogoComponent width={200} height={200} />
        </View>

        <DrawerContentScrollView>
          <TouchableHighlight
            style={{
              padding: screenHeight * 0.01,
              margin: screenHeight * 0.008,
              borderRadius: 3,
            }}
            onPress={() => {
              props.navigation.dispatch(DrawerActions.closeDrawer());
              props.navigation.navigate('HomeScreen');
            }}
            underlayColor={colors.primary}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Ionicons
                name="ios-person-outline"
                color={colors.white}
                size={fontSizeMedium}
              />

              <AppTextComponent
                style={{
                  color: colors.white,
                  textAlign: 'left',
                  flexDirection: 'row',
                }}>
                {'   '}
                Home
                {'   '}
              </AppTextComponent>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              padding: screenHeight * 0.01,
              margin: screenHeight * 0.008,
              borderRadius: 3,
            }}
            onPress={() => {
              props.navigation.dispatch(DrawerActions.closeDrawer());
              props.navigation.navigate('PersonalProfileScreen');
            }}
            underlayColor={colors.primary}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Ionicons
                name="ios-person-outline"
                color={colors.white}
                size={fontSizeMedium}
              />

              <AppTextComponent
                style={{
                  color: colors.white,
                  textAlign: 'left',
                  flexDirection: 'row',
                }}>
                {'   '}
                Profile
                {'   '}
              </AppTextComponent>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              padding: screenHeight * 0.01,
              margin: screenHeight * 0.008,
              borderRadius: 3,
            }}
            onPress={() => {
              props.navigation.dispatch(DrawerActions.closeDrawer());
              props.navigation.navigate('ContactUsScreen');
            }}
            underlayColor={colors.primary}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <AntDesign
                name="phone"
                color={colors.white}
                size={fontSizeMedium}
              />

              <AppTextComponent
                style={{
                  color: colors.white,
                  textAlign: 'left',
                  flexDirection: 'row',
                }}>
                {'   '}
                Contact Us
                {'   '}
              </AppTextComponent>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              padding: screenHeight * 0.01,
              margin: screenHeight * 0.008,
              borderRadius: 3,
            }}
            onPress={() => {
              props.navigation.dispatch(DrawerActions.closeDrawer());
              props.navigation.navigate('AboutUsScreen');
            }}
            underlayColor={colors.primary}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={require('../Assets/images/zabeeha_silhouette.png')}
                style={{
                  width: fontSizeMedium,
                  height: fontSizeMedium,
                  resizeMode: 'contain',
                }}
              />

              <AppTextComponent
                style={{
                  color: colors.white,
                  textAlign: 'left',
                  flexDirection: 'row',
                }}>
                {'   '}
                About Us
                {'   '}
              </AppTextComponent>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={{
              padding: screenHeight * 0.01,
              margin: screenHeight * 0.008,
              borderRadius: 3,
            }}
            onPress={() => {
              dispatch(emptyCart());
              setTimeout(() => {
                dispatch(logout());
              }, 100);
            }}
            underlayColor={colors.primary}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <SimpleLineIcons
                name="logout"
                color={colors.white}
                size={fontSizeMedium}
              />

              <AppTextComponent
                style={{
                  color: colors.white,
                  textAlign: 'left',
                  flexDirection: 'row',
                }}>
                {'   '}
                Logout
                {'   '}
              </AppTextComponent>
            </View>
          </TouchableHighlight>
        </DrawerContentScrollView>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.4,
          }}>
          <AppTextComponent
            style={{
              fontSize: fontSizeSmall,
            }}>
            Powered by Makglobal
          </AppTextComponent>
          <AppTextComponent
            style={{
              fontSize: fontSizeSmall,
            }}>
            v{deviceInfoModule.getVersion()}
          </AppTextComponent>
        </View>
      </View>
    </SafeAreaView>

    // {/* </ScreenComponent> */}
  );
};
