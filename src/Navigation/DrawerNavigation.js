import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';

import colors from '../Utils/colors';
import {screenHeight} from '../Utils/Dimensions';

import TabNavigation from './TabNavigation';
import TransactionScreen from '../Screens/TransactionsScreen';
import DrawerContentComponent from '../Components/DrawerContentComponent';
import QRCodeScreen from '../Screens/QRCodeScreen';

import ProfileScreenNavigation from './ProfileScreenNavigation';
import HomeScreen from '../Screens/HomeScreen';
import PersonalProfileScreen from '../Screens/PersonalProfileScreen';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      openByDefault={false}
      drawerContent={props => <DrawerContentComponent {...props} />}
      screenOptions={({navigation}) => ({
        headerLeft: () => (
          <MaterialCommunityIcons
            onPress={() => navigation.toggleDrawer()}
            name="microsoft-xbox-controller-menu"
            size={screenHeight * 0.04}
            style={{marginLeft: 10}}
            color={colors.secondary}
          />
        ),

        drawerActiveTintColor: colors.primary,
        drawerActiveBackgroundColor: colors.secondary,
        drawerInactiveTintColor: colors.secondary,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: colors.secondary,
        },
        drawerType: 'slide',
      })}>
      <Drawer.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{title: ''}}
      />
      {/* <Drawer.Screen name="Transactions" component={TransactionScreen} />
      <Drawer.Screen name="Profile" component={PersonalProfileScreen} /> */}
      {/* <Drawer.Screen name="QR Code" component={QRCodeScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
