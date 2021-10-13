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
import {getData, login} from './src/features/userSlice';

const App: () => Node = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getUserAsync().then(user => {
      if (user) {
        dispatch(login(user));
        dispatch(getData(user.id));
      }
    });
  }, []);
  return <StartNavigation />;
};

export default App;
