import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from '../Screens/HomeScreen';
import TransactionsScreen from '../Screens/TransactionsScreen';

import colors from '../Utils/colors';
import {screenHeight} from '../Utils/Dimensions';
import ProfileScreenNavigation from './ProfileScreenNavigation';
import DrawerNavigation from './DrawerNavigation';
import PersonalProfileScreen from '../Screens/PersonalProfileScreen';
import QRCodeScreen from '../Screens/QRCodeScreen';
import NotificationScreen from '../Screens/NotificationScreen';
import {
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import TabBarContentComponent from '../Components/TabBarContentComponent';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      backBehavior="firstRoute"
      tabBar={props => <TabBarContentComponent {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.secondary,
        tabBarStyle: {
          backgroundColor: colors.primary,
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.grey,
      }}>
      <Tab.Screen
        name="Dashboard"
        component={HomeScreen} // Changing to drawer from HomeScreen for test
        options={{
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                backgroundColor: focused ? colors.secondary : colors.primary,
                borderRadius: 100,
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo
                name="home"
                color={focused ? colors.primary : color}
                size={screenHeight * 0.03}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={() => ({
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                backgroundColor: focused ? colors.secondary : colors.primary,
                borderRadius: 100,
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo
                name="notification"
                color={focused ? colors.primary : color}
                size={screenHeight * 0.03}
              />
            </View>
          ),
        })}
      />

      <Tab.Screen
        name="QR Code"
        component={QRCodeScreen}
        options={({navigation}) => ({
          tabBarIcon: ({color, focused, route, options: {onPress}}) => (
            <View
              style={{
                position: Platform.OS === 'ios' ? 'absolute' : 'relative',
                // top: screenHeight * 0.04,
                marginTop: Platform.OS === 'ios' ? 0 : -screenHeight * 0.05,
                bottom: 0,
                backgroundColor: focused ? colors.secondary : colors.secondary,
                padding: 5,
                borderRadius: 100,
              }}>
              <View
                style={{
                  backgroundColor: focused ? colors.secondary : colors.primary,
                  // padding: 10,
                  borderRadius: 100,
                  // marginTop: -30,
                  alignItems: 'center',
                  justifyContent: 'center',

                  elevation: 20,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 6,
                  },
                  shadowOpacity: 0.6,
                  shadowRadius: 10,
                }}>
                <MaterialCommunityIcons
                  name="qrcode"
                  style={{margin: 10, elevation: 15}}
                  color={focused ? colors.primary : colors.secondary}
                  size={screenHeight * 0.05}
                />
              </View>
              {/* </TouchableOpacity> */}
            </View>
          ),
        })}
      />

      <Tab.Screen
        name="Transactions"
        component={TransactionsScreen}
        options={() => ({
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                backgroundColor: focused ? colors.secondary : colors.primary,
                borderRadius: 100,
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo
                name="list"
                color={focused ? colors.primary : color}
                size={screenHeight * 0.03}
              />
            </View>
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={PersonalProfileScreen}
        options={() => ({
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                backgroundColor: focused ? colors.secondary : colors.primary,
                borderRadius: 100,
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Ionicons
                name="person"
                color={focused ? colors.primary : color}
                size={screenHeight * 0.03}
              />
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
