/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';


import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/provider';

const AppContainer = () => {
   const {authState:{isLoggedIn} } = useContext(GlobalContext);

    //console.log('State:', isLoggedIn);

  return (
      <NavigationContainer>
          {/* <AuthNavigator />  */}
          {/* <HomeNavigator /> */}
          {isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    );
};

export default AppContainer;
