import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {selectUser} from '../features/userSlice';

import LoadingComponent from '../Components/LoadingComponent';
import DrawerNavigation from './DrawerNavigation';
import LoginNavigation from './LoginNavigation';
import ProfileScreenNavigation from './ProfileScreenNavigation';
import MainStackNavigation from './MainStackNavigation';

const StartNavigation = () => {
  const user = useSelector(selectUser);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <LoadingComponent />;
  return (
    <NavigationContainer>
      {user ? <MainStackNavigation /> : <LoginNavigation />}

      {/* {user ? <DrawerNavigation /> : <LoginNavigation />} */}
    </NavigationContainer>
  );
};

export default StartNavigation;
