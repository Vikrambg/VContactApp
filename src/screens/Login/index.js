/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import Container from '../../components/common/Container';
import CustomButton from '../../components/common/CustomButton';
import Input from '../../components/common/Input';

const Login = () => {
    const [value, onChangeText] = useState('');
    return (
        <Container>
            <Input
                label="Username"
                onChangeText={(text) => onChangeText(text)}
                value={value}
                error={'This field is required'}
            />
            <Input
                label="Password"
                onChangeText={(text) => onChangeText(text)}
                value={value}
                iconPosition="left"
                icon={<Text>Hide</Text>}
            />
            <CustomButton loading={true} title="Submit" primary />
        </Container>
    );
};

export default Login;
