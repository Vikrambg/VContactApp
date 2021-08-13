/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from '../common/Container';
import styles from './styles';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import {REGISTER} from '../../constants/routeNames';

//const logo = 'https://toppng.com/uploads/preview/youtube-logo-11609383902z56yosfap9.png';

const LoginComponent = () => {

    const {navigate} = useNavigation();

    return (
        <Container>
            <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />
            <View>
                <Text style={styles.title}>Welcome to VContact</Text>
                <Text style={styles.subTitle}>Please login here!</Text>
                <View style={styles.form}>
                    <Input
                        label="Username"
                        iconPosition="right"
                        placeholder="username"
                    />
                    <Input
                        label="Password"
                        placeholder="password"
                        secureTextEntry={true}
                        icon={<Text> Hide</Text>}
                        iconPosition="right"
                    />
                    <CustomButton primary title="Submit" />
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
