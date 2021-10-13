import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import PersonalProfileScreen from '../Screens/PersonalProfileScreen';
// import DependentsScreen from '../Screens/DependentsScreen';
// import DependentProfileScreen from '../Screens/DependentProfileScreen';
import DrawerNavigation from './DrawerNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import colors from '../Utils/colors';
import {Platform, TouchableOpacity, View} from 'react-native';
import CategoriesScreen from '../Screens/CategoriesScreen';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CartScreen from '../Screens/CartScreen';
import ProductScreen from '../Screens/ProductScreen';
import AddressScreen from '../Screens/AddressScreen';
import ConfirmOrderScreen from '../Screens/ConfirmOrderScreen';
import OrderDetailScreen from '../Screens/OrderDetailScreen';
import ContactUsScreen from '../Screens/ContactUsScreen';
import AboutUsScreen from '../Screens/AboutUsScreen';

const Stack = createStackNavigator();

const MainStackNavigation = () => (
  <>
    <Stack.Navigator
      screenOptions={{
        headerBackImage: () => (
          <Ionicons
            name="chevron-back"
            size={30}
            color={colors.secondary}
            style={{marginLeft: Platform.OS === 'ios' ? 10 : 0}}
          />
        ),
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: colors.primary,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0,
          shadowColor: '#000',
          elevation: 0,
        },
        headerTitleStyle: {
          color: colors.secondary,
        },
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      {/* WRITTING FOR TEST */}
      <Stack.Screen
        name="DrawerNavigation"
        component={DrawerNavigation}
        options={{headerShown: false}}
      />

      {/* TEST END */}

      <Stack.Screen
        name="CategoriesScreen"
        component={CategoriesScreen}
        options={{title: ''}}
      />
      <Stack.Screen
        name="ProductScreen"
        component={ProductScreen}
        options={{title: ''}}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: 'Cart',
        }}
      />
      <Stack.Screen
        name="AddressScreen"
        component={AddressScreen}
        options={{
          title: 'Select Address',
        }}
      />
      <Stack.Screen
        name="ConfirmOrderScreen"
        component={ConfirmOrderScreen}
        options={{
          title: 'Checkout',
        }}
      />
      <Stack.Screen
        name="OrderDetailScreen"
        component={OrderDetailScreen}
        options={{
          title: 'Order Detail',
        }}
      />
      <Stack.Screen
        name="PersonalProfileScreen"
        component={PersonalProfileScreen}
        options={{
          title: 'Profile',
        }}
      />
      <Stack.Screen
        name="ContactUsScreen"
        component={ContactUsScreen}
        options={{
          title: '',
        }}
      />
      <Stack.Screen
        name="AboutUsScreen"
        component={AboutUsScreen}
        options={{
          title: '',
          headerBackImage: () => (
            <Ionicons
              name="chevron-back"
              size={30}
              color={colors.greyDarkest}
              style={{marginLeft: Platform.OS === 'ios' ? 10 : 0}}
            />
          ),
          headerStyle: {
            backgroundColor: colors.greyLightest,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0,
            shadowColor: '#000',
            elevation: 0,
          },
        }}
      />
    </Stack.Navigator>
  </>
);

export default MainStackNavigation;
