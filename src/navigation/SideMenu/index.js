/* eslint-disable prettier/prettier */
import React from 'react';
import { Alert, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Container from '../../components/common/Container';
import { SETTINGS } from '../../constants/routeNames';
import logoutUser from '../../context/actions/auth/logoutUser';
import styles from './styles';
//import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from '../../components/common/Icon';


const SideMenu = ({ navigation, authDispatch }) => {

    const handleLogout = () => {
        console.log('Logout');
        navigation.toggleDrawer();
        Alert.alert('Logout','Are you sure you want to logout',[
            {
                text:'Cancel',
                onPress:() => {},
            },
            {
                text:'Ok',
                onPress:() =>{
                    logoutUser()(authDispatch);
                },
            },
        ]);
    };

    const menuItems = [
        {
            icon:<Icon type="material" name="settings" size={20} />,
            name: 'Settings',
            onPress: () => {navigation.navigate(SETTINGS);},
        },
        {
            icon:<Icon type="material" name="logout" size={20} />,
            name: 'Logout',
            onPress:() => handleLogout(),
        },
    ];

    return (
        <SafeAreaView>
            <Container>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={styles.logoImage}
                />
                <View style={{}}>
                    {menuItems.map(({name, icon, onPress}) => (
                        <TouchableOpacity key={name} style={styles.item} onPress={onPress}>
                            {icon}
                            <Text style={styles.itemText}>{name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </Container>
        </SafeAreaView>
    );
};

export default SideMenu;

