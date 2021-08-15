/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ActivityIndicator } from 'react-native';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/provider';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppContainer = () => {

  const {authState:{isLoggedIn} } = useContext(GlobalContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authLoaded, setAuthLoaded] = useState(false);

  const getUser = async () => {
    setAuthLoaded(true);
    try {

      const user = await AsyncStorage.getItem('user');

      if (user) {
        setAuthLoaded(true);
         console.log(user);
        setIsAuthenticated(true);
      } else {
        setAuthLoaded(true);
        setIsAuthenticated(false);
      }

    } catch (error) {}
  };

  useEffect(() => {
    getUser();
  },[isLoggedIn]);

  console.log('State:', isAuthenticated);

  return (
    <>
    {authLoaded ? (
        <NavigationContainer>
          {/* <AuthNavigator />  */}
          {/* <HomeNavigator /> */}
          {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      ) : (
        <ActivityIndicator />
      ) }
    </>
    );
};

export default AppContainer;
