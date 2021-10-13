import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import PersonalProfileScreen from '../Screens/PersonalProfileScreen';
import DependentsScreen from '../Screens/DependentsScreen';

import colors from '../Utils/colors';

const Tabs = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const DependentStackComponent = () => (
  <Stack.Navigator initialRouteName="Dependents">
    <Stack.Screen
      name="Dependents"
      component={DependentsScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="DependentProfile"
      component={PersonalProfileScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const ProfileTabNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.secondary,
        },
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
      }}
      initialRouteName="Personal Profile">
      <Tabs.Screen name="Personal Profile" component={PersonalProfileScreen} />
      <Tabs.Screen
        name="DependentCopmonent"
        component={DependentStackComponent}
        options={{
          title: 'Dependents',
        }}
      />
    </Tabs.Navigator>
  );
};

export default ProfileTabNavigation;
