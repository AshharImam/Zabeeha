import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../Screens/HomeScreen';

import colors from '../Utils/colors';
import OrdersScreen from '../Screens/OrdersScreen';
import {View} from 'react-native';
import TabBarContentComponent from '../Components/TabBarContentComponent';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import ShopsScreen from '../Screens/ShopsScreen';
import {fontSizeXLarge, screenHeight} from '../Utils/Dimensions';
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      backBehavior="firstRoute"
      tabBar={props => <TabBarContentComponent {...props} />}
      screenOptions={({navigation}) => ({
        headerLeft: () => (
          <Ionicons
            onPress={() => navigation.toggleDrawer()}
            name="menu"
            size={fontSizeXLarge}
            style={{marginLeft: responsiveHeight(2)}}
            color={colors.secondary}
          />
        ),

        drawerActiveTintColor: colors.primary,
        drawerActiveBackgroundColor: colors.secondary,
        drawerInactiveTintColor: colors.secondary,
        headerStyle: {
          backgroundColor: colors.primary,
          shadowColor: '#0000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
        },
        headerTitleStyle: {
          color: colors.secondary,
        },
        drawerType: 'slide',
      })}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen} // Changing to drawer from HomeScreen for test
        options={{
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Entypo
                name="home"
                color={focused ? colors.redDarkest : color}
                size={responsiveHeight(3.5)}
              />
            </View>
          ),
          title: '',
        }}
      />
      {/* <Tab.Screen
        name="ShopsScreen"
        component={ShopsScreen}
        options={() => ({
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                // backgroundColor: focused ? colors.secondary : colors.primary,
                borderRadius: 100,
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Fontisto
                name="shopping-store"
                color={focused ? colors.redDarkest : color}
                size={responsiveHeight(3.5)}
              />
            </View>
          ),
          title: 'Shops',
        })}
      /> */}
      <Tab.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={() => ({
          tabBarIcon: ({color, focused}) => (
            <View
              style={{
                // backgroundColor: focused ? colors.secondary : colors.primary,
                borderRadius: 100,
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <FontAwesome5
                name="receipt"
                color={focused ? colors.redDarkest : color}
                size={responsiveHeight(3.5)}
              />
            </View>
          ),
          title: 'Orders History',
        })}
      />

      {/* <Tab.Screen
        name="CartScreen"
        component={CartScreen}
        options={({navigation}) => ({
          tabBarIcon: ({color, focused, route, options: {onPress}}) => (
            <View
              style={{
                borderRadius: 100,
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <SimpleLineIcons
                name="basket"
                color={focused ? colors.redDarkest : color}
                size={responsiveHeight(3.5)}
              />
            </View>
          ),
        })}
      /> */}
    </Tab.Navigator>
  );
};

export default TabNavigation;
