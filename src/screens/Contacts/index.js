/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
//import Container from '../../components/common/Container';
//import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from '../../components/common/Icon';
import ContactComponent from '../../components/Contacts';
import getContacts from '../../context/actions/contacts/getContacts';
import {GlobalContext} from '../../context/provider';

const Contacts = ({navigation}) => {

    const [modalVisible, setModalVisible] = useState(false);

    const { setOptions } = useNavigation();

    const {
        contactsState:{
            getContacts:{
                data, loading,
            },
        },
        contactsDispatch,
    } = useContext(GlobalContext);

    /* console.log('data', data);
    console.log('loading', loading); */

    useEffect(() => {
        getContacts()(contactsDispatch);
    }, []);


    useEffect(()=> {
        setOptions({
            headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                   <Icon type="evilIcon" name="navicon" size={30} style={{ marginTop:5, marginLeft:15}} />
                </TouchableOpacity>
            ),
        });
    },[]);

    return (
        <ContactComponent
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            data={data}
            loading={loading}
        />
    );
};

export default Contacts;
