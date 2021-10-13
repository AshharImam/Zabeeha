import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import PersonalProfileScreen from '../Screens/PersonalProfileScreen';
import DependentsScreen from '../Screens/DependentsScreen';
import DependentProfileScreen from '../Screens/DependentProfileScreen';
import TabNavigation from './TabNavigation';
import QRCodeScreen from '../Screens/QRCodeScreen';
import TransactionScreen from '../Screens/TransactionsScreen';
import DrawerNavigation from './DrawerNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import colors from '../Utils/colors';
import {Platform} from 'react-native';

const Stack = createStackNavigator();

const MainStackNavigation = () => (
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
      },
      headerTitleStyle: {
        color: colors.secondary,
      },
    }}>
    {/* WRITTING FOR TEST */}
    <Stack.Screen
      name="DrawerNavigation"
      component={DrawerNavigation}
      options={{headerShown: false}}
    />

    {/* TEST END */}

    {/* <Stack.Screen name="PersonalProfile" component={PersonalProfileScreen} /> */}
    <Stack.Screen name="Dependents" component={DependentsScreen} />
    <Stack.Screen name="DependentProfile" component={DependentProfileScreen} />
    {/* <Stack.Screen name="Transactions" component={TransactionScreen} />
    <Stack.Screen name="Profile" component={PersonalProfileScreen} /> */}
    {/* <Stack.Screen name="QRCode" component={QRCodeScreen} /> */}
  </Stack.Navigator>
);

// const ProfileTabNavigation = () => {
//   return (
//     <Tabs.Navigator
//       screenOptions={{
//         tabBarStyle: {
//           backgroundColor: colors.secondary,
//         },
//         tabBarIndicatorStyle: {
//           backgroundColor: colors.primary,
//         },
//       }}
//       initialRouteName="Personal Profile">
//       <Tabs.Screen name="Personal Profile" component={PersonalProfileScreen} />
//       <Tabs.Screen
//         name="DependentCopmonent"
//         component={DependentStackComponent}
//         options={{
//           title: 'Dependents',
//         }}
//       />
//     </Tabs.Navigator>
//   );
// };

export default MainStackNavigation;
