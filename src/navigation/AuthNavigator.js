/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { REGISTER, LOGIN } from '../constants/routeNames';
import Login from '../screens/Login';
import Register from '../screens/Register';

const AuthStack = createNativeStackNavigator();


const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown:false }}  initialRouteName="Login">
        <AuthStack.Screen name={LOGIN} component={Login} />
        <AuthStack.Screen name={REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;


