/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import RegisterComponent from '../../components/Register';

const Register = () => {

    const [form, setForm] = useState({ });
    const [errors, setErrors] = useState({});

    const onChange = ({name, value}) => {
        setForm({ ...form, [name]:value});

        if (value !== '' ) {
            setErrors((prev) => {
                return { ...prev, [name]:null };
            });
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
                return { ...prev,  userName: 'Please add a username'};
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
    };

    return (
        <RegisterComponent form={form} errors={errors} onChange={onChange} onSubmit={onSubmit}   />
    );
};

export default Register;


