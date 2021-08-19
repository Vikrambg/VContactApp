/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from '../common/Container';
import styles from './styles';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import {LOGIN} from '../../constants/routeNames';
import Message from '../common/Message';

//const logo = 'https://toppng.com/uploads/preview/youtube-logo-11609383902z56yosfap9.png';

const RegisterComponent = ({ onSubmit,onChange, form, loading, error, errors }) => {

    const {navigate} = useNavigation();
    const [isSecureEntry, setIsSecureEntry] = useState(true);

    return (
        <Container>
            <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />
            <View>
                <Text style={styles.title}>Welcome to VContact</Text>
                <Text style={styles.subTitle}>Create a free account!</Text>
                <View style={styles.form}>
                    {error?.error && (
                        <Message
                            retry
                            danger
                            retryFn={()=> {
                                console.log('chekc in ');
                            }}
                            message={error?.error}
                        />
                    )}
                    <Input
                        label="Username"
                        iconPosition="right"
                        placeholder="Enter Username"
                        onChangeText={(value) => { onChange({name: 'username', value}); }}
                        error={errors.username || error?.username?.[0]}
                    />
                    <Input
                        label="First Name"
                        iconPosition="right"
                        placeholder="Enter First Name"
                        onChangeText={(value) => { onChange({name: 'firstName', value}); }}
                        error={errors.firstName || error?.first_name?.[0]}
                    />
                    <Input
                        label="Last Name"
                        iconPosition="right"
                        placeholder="Enter Last Name"
                        onChangeText={(value) => { onChange({name: 'lastName', value}); }}
                        error={errors.lastName || error?.last_name?.[0]}
                    />
                    <Input
                        label="Email"
                        iconPosition="right"
                        placeholder="Enter Email"
                        onChangeText={(value) => { onChange({name: 'email', value}); }}
                        error={errors.email || error?.email?.[0]}
                    />
                    <Input
                        label="Password"
                        placeholder="Enter Password"
                        secureTextEntry={isSecureEntry}
                        icon={
                            <TouchableOpacity onPress={
                                () => {setIsSecureEntry((prev)=> !prev);}
                            }>
                                <Text>{isSecureEntry ? "Show" : "Hide" }</Text>
                            </TouchableOpacity>
                        }
                        iconPosition="right"
                        onChangeText={(value) => { onChange({name: 'password', value}); }}
                        error={errors.password || error?.password?.[0]}
                    />
                    <CustomButton
                        loading={loading}
                        onPress={onSubmit}
                        disabled={loading}
                        primary
                        title="Submit"
                    />
                    <View style={styles.createSection}>
                        <Text style={styles.infoText  }>Already have an account?</Text>
                        <TouchableOpacity onPress={() =>{navigate(LOGIN);}}>
                            <Text style={styles.linkBtn}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>
    );
};

export default RegisterComponent;
