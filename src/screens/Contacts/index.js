/* eslint-disable prettier/prettier */
import { DrawerToggleButton } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Container from '../../components/common/Container';

const Contacts = ({navigation}) => {

    const { setOptions } = useNavigation();

    useEffect(()=> {
        setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                    <Text style={{ padding:10 }}>Nav</Text>
                </TouchableOpacity>
            ),
        });
    },[]);

    return (
        <Container>
            <Text> Hello form Contacts</Text>
        </Container>
    );
};

export default Contacts;
