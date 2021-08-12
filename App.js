/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import AppContainer from './src/navigation/index';
import GlobalProvider from './src/context/provider';


const App = () => {
  return (
    <GlobalProvider><AppContainer /></GlobalProvider>
  );
};

export default App;
