import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import PersonalProfileScreen from '../Screens/PersonalProfileScreen';
import DependentsScreen from '../Screens/DependentsScreen';
import DependentProfileScreen from '../Screens/DependentProfileScreen';
import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const ProfileScreenNavigation = () => (
  <Stack.Navigator
    // initialRouteName="PersonalProfile" // uncomment for removing test
    initialRouteName="Dashboard">
    {/* WRITTING FOR TEST */}
    <Stack.Screen
      name="TabNavigation"
      component={TabNavigation}
      options={{headerShown: false}}
    />

    {/* TEST END */}

    <Stack.Screen
      name="PersonalProfile"
      component={PersonalProfileScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Dependents"
      component={DependentsScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="DependentProfile"
      component={DependentProfileScreen}
      options={{headerShown: false}}
    />
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

export default ProfileScreenNavigation;
