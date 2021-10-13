import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';

import colors from '../Utils/colors';
import {screenHeight} from '../Utils/Dimensions';

import TabNavigation from './TabNavigation';
import DrawerContentComponent from '../Components/DrawerContentComponent';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      openByDefault={false}
      drawerContent={props => <DrawerContentComponent {...props} />}
      screenOptions={({navigation}) => ({
        headerShown: false,
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
