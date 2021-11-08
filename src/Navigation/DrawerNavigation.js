import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createDrawerNavigator} from '@react-navigation/drawer';

import colors from '../Utils/colors';
import {fontSizeXLarge, screenHeight} from '../Utils/Dimensions';

import TabNavigation from './TabNavigation';
import DrawerContentComponent from '../Components/DrawerContentComponent';
import ShopsScreen from '../Screens/ShopsScreen';
import {responsiveHeight} from 'react-native-responsive-dimensions';
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      openByDefault={false}
      drawerContent={props => <DrawerContentComponent {...props} />}
      screenOptions={({navigation}) => ({
        // headerShown: false,
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
      <Drawer.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{title: '', headerShown: false}}
      />
      <Drawer.Screen
        name="ShopsScreen"
        component={ShopsScreen}
        options={{title: 'Shops', headerTitle: 'Shops'}}
      />
      {/* <Drawer.Screen name="Transactions" component={TransactionScreen} />
      <Drawer.Screen name="Profile" component={PersonalProfileScreen} /> */}
      {/* <Drawer.Screen name="QR Code" component={QRCodeScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
