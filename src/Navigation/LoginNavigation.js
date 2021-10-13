import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';

import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignupScreen';
import colors from '../Utils/colors';
import {
  fontSizeLarge,
  fontSizeMedium,
  fontSizeXLarge,
} from '../Utils/Dimensions';
import {Platform} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {openSans} from '../Utils/fonts';

const Stack = createStackNavigator();

const LoginNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerBackImage: () => (
          <Entypo
            name="chevron-thin-left"
            color={colors.white}
            size={fontSizeLarge}
            style={{
              marginLeft: Platform.OS == 'ios' ? responsiveWidth(3) : 0,
            }}
          />
        ),

        headerStyle: {
          backgroundColor: colors.primary,
          shadowOpacity: 0,
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowColor: '#0000',
          shadowRadius: 0,
        },
        headerTitleAlign: 'center',
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: openSans,
        },
      }}>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          title: 'REGISTER',
        }}
      />
    </Stack.Navigator>
  );
};

export default LoginNavigation;
