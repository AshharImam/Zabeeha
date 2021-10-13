/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import type {Node} from 'react';
import StartNavigation from './src/Navigation/StartNavigation';
import {getUserAsync} from './src/Utils/storage';
import {useDispatch} from 'react-redux';
import {login} from './src/features/userSlice';

const App: () => Node = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUserAsync().then(user => {
      dispatch(login(user));
    });
  }, []);
  return <StartNavigation />;
};

export default App;
