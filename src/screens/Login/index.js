/* eslint-disable prettier/prettier */
import { useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import LoginComponent from '../../components/Login';
import loginUser from '../../context/actions/auth/loginUser';
import { GlobalContext } from '../../context/provider';


const Login = () => {

    const [form, setForm ] = useState({});

    const { params } = useRoute();

    const {authDispatch, authState:{ error, loading  }} = useContext(GlobalContext);

    useEffect(() =>{
        if (params) {
            console.log(params);
        }
    },[params]);

    const onSubmit = () => {
        if (form.username && form.password) {
            console.log('login');
             loginUser(form)(authDispatch);
        }
    };

    const onChange = ({name, value}) => {
        setForm({...form, [name]:value});
    };

    return (
        <LoginComponent
            onSubmit={onSubmit}
            onChange={onChange}
            form={form}
            /* errors={errors} */
            error={error}
            loading={loading}
        />
    );
};

export default Login;
