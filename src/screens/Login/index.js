/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import LoginComponent from '../../components/Login';


const Login = () => {

    const [form, setForm ] = useState({});

    return (
        <LoginComponent />
    );
};

export default Login;
