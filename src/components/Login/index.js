/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from '../common/Container';
import styles from './styles';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import {REGISTER} from '../../constants/routeNames';
import Message from '../common/Message';

//const logo = 'https://toppng.com/uploads/preview/youtube-logo-11609383902z56yosfap9.png';

const LoginComponent = ({ onSubmit, onChange, error, form, login, loading  }) => {

    const {navigate} = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    return (
        <Container>
            <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />
            <View>
                <Text style={styles.title}>Welcome to VContact</Text>
                <Text style={styles.subTitle}>Please login here!</Text>

                <View style={styles.form}>
                    {error && !error.error && (
                        <Message danger onDismiss={() => { console.log('dismiss');}} message="Invalid credentials" />
                    )}

                    {error?.error && (
                        <Message danger onDismiss message="Invalid Credentials" />
                    )}

                    <Input
                        label="Username"
                        iconPosition="right"
                        placeholder="username"
                        error={error?.username?.[0]}
                        onChangeText={(value) => {
                            onChange({name:'username', value});
                        }}
                    />
                    <Input
                        label="Password"
                        placeholder="password"
                        secureTextEntry={isSecureEntry}
                        icon={
                            <TouchableOpacity onPress={
                                () => {setIsSecureEntry((prev)=> !prev)}
                            }>
                                <Text>{isSecureEntry ? "Show" : "Hide" }</Text>
                            </TouchableOpacity>
                        }
                        iconPosition="right"
                        error={error?.error?.[0]}
                        onChangeText={(value) => {
                            onChange({name: 'password', value});
                        }}
                    />
                    <CustomButton loading={loading}  onPress={onSubmit} primary title="Submit" />
                    <View style={styles.createSection}>
                        <Text style={styles.infoText  }>Need a new account?</Text>
                        <TouchableOpacity onPress={() =>{navigate(REGISTER);}}>
                            <Text style={styles.linkBtn}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    );
};

export default LoginComponent;
