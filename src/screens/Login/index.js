/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import LoginComponent from '../../components/Login';


const Login = () => {
    const [value, onChangeText] = useState('');
    return (
        <LoginComponent />
    );
};

export default Login;
