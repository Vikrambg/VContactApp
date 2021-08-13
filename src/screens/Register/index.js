/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import RegisterComponent from '../../components/Register';
//import envs from '../../config/env';
import register from '../../context/actions/auth/register';
import axiosInstance from '../../helpers/axiosInterceptor';
import { GlobalContext } from '../../context/provider';


const Register = () => {

    const [form, setForm] = useState({ });
    const [errors, setErrors] = useState({});
    const { authDispatch, authState:{ error, loading, data } } = useContext(GlobalContext);
    //const {DEV_BACKEND_URL} = envs;

    //console.log('BACKEND_URL', DEV_BACKEND_URL);
    //console.log('__DEV__', __DEV__);

    useEffect(() => {
        axiosInstance.post('/contacts').catch((err) => {
            //console.log('error', err.response);
        });
    }, []);

    const onChange = ({name, value}) => {
        setForm({ ...form, [name]:value});

        if (value !== '' ) {
            if (name === 'password') {
                if (value.length < 6) {
                    setErrors((prev) => {
                        return { ...prev, [name]:'This field needs minimum 6 characters .'};
                    });
                } else {
                    setErrors((prev) => {
                        return { ...prev, [name]:null };
                    });
                }
            } else {
                setErrors((prev) => {
                    return { ...prev, [name]:null };
                });
            }
        } else {
            setErrors((prev) => {
                return { ...prev, [name]:'This field is required.'};
            });
        }
    };

    const onSubmit = () => {
        //validations
        console.log('form:',form);
        if (!form.userName) {
            setErrors(prev => {
                return { ...prev,  username: 'Please add a username'};
            });
        }
        if (!form.firstName) {
            setErrors(prev => {
                return { ...prev,  firstName: 'Please add a first name'};
            });
        }
        if (!form.lastName) {
            setErrors(prev => {
                return { ...prev,  lastName: 'Please add a last name'};
            });
        }
        if (!form.email) {
            setErrors(prev => {
                return { ...prev,  email: 'Please add a email'};
            });
        }
        if (!form.password) {
            setErrors(prev => {
                return { ...prev,  password: 'Please add a password'};
            });
        }


        if (
            Object.values(form).length === 5 &&
            Object.values(form).every(item => item.trim().length > 0) &&
            Object.values(errors).every((item) => !item)
        ) {
            register(form)(authDispatch);
        }
    };

    return (
        <RegisterComponent form={form} errors={errors} onChange={onChange} onSubmit={onSubmit} error={error} loading={loading}  />
    );
};

export default Register;


