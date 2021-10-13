import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {selectLoading, selectUser, setLoading} from '../features/userSlice';

import LoadingComponent from '../Components/LoadingComponent';
import LoginNavigation from './LoginNavigation';
import MainStackNavigation from './MainStackNavigation';
import ErrorComponent from '../Components/ErrorComponent';
import {selectError, setError} from '../features/errorSlice';
import {Modal, View} from 'react-native';
import colors from '../Utils/colors';

const StartNavigation = () => {
  const user = useSelector(selectUser);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setLoading(false));
    }, 1000);
  }, []);

  if (loading) return <LoadingComponent />;
  return (
    <NavigationContainer>
      {user ? <MainStackNavigation /> : <LoginNavigation />}

      {/* {user ? <DrawerNavigation /> : <LoginNavigation />} */}
      <ErrorComponent
        error={error?.message ? error?.message : error}
        isLoading={true}
        setIsLoading={() => {}}
        setError={error => {
          dispatch(setError(error));
        }}
      />

      <Modal visible={loading} animationType="slide">
        <LoadingComponent />
      </Modal>
    </NavigationContainer>
  );
};

export default StartNavigation;
