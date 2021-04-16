import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../features/userSlice';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createStackNavigator();

const HomeNavigation = () => {
  const dispatch = useDispatch();
  function handleLogout() {
    dispatch(logout());
  }

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => <Button onPress={handleLogout} title="Logout" />,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigation;
